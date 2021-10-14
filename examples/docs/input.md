## 输入框(Input)

通过鼠标或键盘输入字符

> Input 为受控组件，它总会显示 Vue 绑定值。

### 基础用法

:::demo

```html

<template>
	<t-input placeholder="输入"></t-input>
</template>
```

:::

### 带状态输入框

:::demo 可以通过属性`status`属性来设置输入框状态

```html

<template>
	<t-input status="success" placeholder="success状态"></t-input>
	<t-input status="warning" placeholder="warning状态"></t-input>
	<t-input status="danger" placeholder="danger状态"></t-input>
</template>
```

:::

### 禁用输入框

:::demo

```html

<template>
	<t-input disabled placeholder="禁用"></t-input>
</template>
```

:::

### 带图标的输入框

:::demo 可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标

```html 
<t-input prefix-icon="t-icon-edit" placeholder="请输入"></t-input>
<t-input suffix-icon="t-icon-calendar" placeholder="输入日期"></t-input>
```

:::

### 输入框组

:::demo 可通过 slot 来指定在 input 中前置或者后置内容。

```html

<t-input>
	<template slot="prepend">Http://</template>
</t-input>
<t-input>
	<template slot="append">.com</template>
</t-input>
```

:::

### 输入框尺寸

:::demo 可通过属性`size`来修改input组件的大小

```html

<t-input prefix-icon="t-icon-edit" placeholder="请输入"></t-input>
<t-input size="medium" prefix-icon="t-icon-edit" placeholder="请输入"></t-input>
<t-input size="small" prefix-icon="t-icon-edit" placeholder="请输入"></t-input>
<t-input size="mini" prefix-icon="t-icon-edit" placeholder="请输入"></t-input>
```

:::

### Input Attributes

| 参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|type|类型|string|text,textarea和其它原生input的type|text
|value/v-model|绑定值|string/number|-|-
|disabled|禁用|boolean|true/false|-|false
|size|大小尺寸|string|medium / small / mini|-
|prefix-icon|输入框头部图标| string| — | —
|suffix-icon|输入框尾部图标| string| — | —
|status|输入框边框状态|string|success / warning / danger|-


### Input Slots
| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

