## 标签(Tag)

用于标记和选择。

### 基本用法

:::demo 由`type`属性来选择tag的类型

```html

<t-tag>标签一</t-tag>
<t-tag type="success">标签二</t-tag>
<t-tag type="warning">标签三</t-tag>
<t-tag type="info">标签四</t-tag>
<t-tag type="danger">标签五</t-tag>
```

:::

### 带关闭的标签

:::demo 由`closable`属性来声明带关闭按钮的标签,通过事件`close`来监听关闭按钮点击事件

```html

<t-tag closable @close="handleClose">标签一</t-tag>
<t-tag type="success" closable @close="handleClose">标签二</t-tag>
<t-tag type="warning" closable @close="handleClose">标签三</t-tag>
<t-tag type="info" closable @close="handleClose">标签四</t-tag>
<t-tag type="danger" closable @close="handleClose">标签五</t-tag>
<script>
    export default {
        methods: {
            handleClose() {
                console.log('点击了关闭按钮')
            }
        }
    }
</script>
```

:::

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
:::demo 通过`size`属性来设置标签的尺寸，内置的尺寸为：`medium`、`small`、`mini`

```html

<t-tag closable>默认标签</t-tag>
<t-tag size="medium" closable>中等标签</t-tag>
<t-tag size="small" closable>小型标签</t-tag>
<t-tag size="mini" closable>超小标签</t-tag>
```

:::

### 不同主题

:::demo 通过`theme`属性来声明主题，值为：`light`

```html

<t-tag theme="light">标签一</t-tag>
<t-tag type="success" theme="light">标签二</t-tag>
<t-tag type="warning" theme="light">标签三</t-tag>
<t-tag type="info" theme="light">标签四</t-tag>
<t-tag type="danger" theme="light">标签五</t-tag>
```

::: 

### Tag Attributes

| 参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
| type | 类型 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| size | 尺寸 | string | medium / small / mini | — |
| theme | 主题 | string | dark / light | dark |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 Tag 时触发的事件 | — |
| close | 关闭 Tag 时触发的事件 | — |
