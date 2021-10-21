const mdContainer = require('markdown-it-container');
module.exports = md => {
	md.use(mdContainer, 'demo', {
		validate(params) {
			return params.trim().match(/^demo\s*(.*)$/);
		},
		render(tokens, idx) {
			if (tokens[idx].nesting === 1) {
				// 1.获取第一行的内容使用markdown渲染html作为组件的描述
				let demoInfo = tokens[idx].info
					.trim()
					.match(/^demo\s*(.*)$/);
				let description =
					demoInfo && demoInfo.length > 1
						? demoInfo[1]
						: '';
				let descriptionHTML = description
					? md.render(description)
					: '';
				// 2.获取代码块内的html和js代码
				let content = tokens[idx + 1].content;

				// 3.使用自定义开发组件【markdown-demo-render-block】来包裹内容并且渲染成案例和代码示例
				return `<markdown-demo-render-block>
            <!--try-ui-demo-run ${content} try-ui-demo-run-->
            ${descriptionHTML}
            <template   slot="highlight">`;
			} else {
				return '</template></markdown-demo-render-block>\n';
			}
		}
	});
	md.use(mdContainer, 'tip');
	md.use(mdContainer, 'warning');
};
