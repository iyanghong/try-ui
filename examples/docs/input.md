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
