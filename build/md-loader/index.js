const md = require('./render');
const {compileTemplate} = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

function getScriptContent(content) {
	const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
	return result && result[2] ? result[2].trim() : '';
}

function getTemplateContent(content) {
	content = content.trim();
	if (!content) {
		return content;
	}
	return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function getCompilerContent(template, script) {
	const finalOptions = {
		source: `<div>${template}</div>`,
		filename: 'inline-component',
		compiler
	};
	const compiled = compileTemplate(finalOptions);
	// tips
	if (compiled.tips && compiled.tips.length) {
		compiled.tips.forEach(tip => {
			console.warn(tip);
		});
	}
	// errors
	if (compiled.errors && compiled.errors.length) {
		console.error(
			`\n  Error compiling template:\n${compiled.source.split(/\r?\n/)
				.map(line => `  ${line}`)
				.join('\n')}\n` +
			compiled.errors.map(e => `  - ${e}`).join('\n') +
			'\n'
		);
	}
	let demoComponentContent = `
    ${compiled.code}
  `;
	// todo: 这里采用了硬编码有待改进
	script = script.trim();
	if (script) {
		script = script.replace(/export\s+default/, 'const demoComponentExport =');
	} else {
		script = 'const demoComponentExport = {}';
	}
	demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...demoComponentExport
    }
  })()`;
	return demoComponentContent;

}

module.exports = function (source) {
	const content = md.render(source);
	const startTag = '<!--try-ui-demo-run';
	const startTagLen = startTag.length;
	const endTag = 'try-ui-demo-run-->';
	const endTagLen = endTag.length;
	let commentStart = content.indexOf(startTag);
	let commentEnd = content.indexOf(endTag, commentStart + startTagLen);


	let componentsString = '';
	let output = [];
	let id = 0;
	let start = 0;

	while (commentStart !== -1 && commentEnd !== -1) {
		output.push(content.slice(start, commentStart));

		const commentContent = content.slice(commentStart + startTagLen, commentEnd);
		const html = getTemplateContent(commentContent);
		const script = getScriptContent(commentContent);
		let demoComponentContent = getCompilerContent(html, script);
		const demoComponentName = `demo-run-${id}`;
		output.push(`<template slot="source"><${demoComponentName} /></template>`);
		componentsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

		// 重新计算下一次的位置
		id++;
		start = commentEnd + endTagLen;
		commentStart = content.indexOf(startTag, start);
		commentEnd = content.indexOf(endTag, commentStart + startTagLen);
	}

	let pageScript = '';
	if (componentsString) {
		pageScript = `
<script>
export default {
    name : 'demo-doc-render',
    components:{
        ${componentsString}
    }
}
</script>`
	} else if (content.indexOf('<script>') === 0) { // 硬编码，有待改善
		start = content.indexOf('</script>') + '</script>'.length;
		pageScript = content.slice(0, start);
	}
	output.push(content.slice(start));
	return `
    <template>
      <section class="content try-ui-demo-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `;
}
