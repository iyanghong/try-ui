## ToolTip 提示

:::demo

```html

<t-tooltip content="这是一一个按钮">
    <t-button>鼠标经过我</t-button>
</t-tooltip>
```

:::

### 弹出方向

:::demo

```html

<t-tooltip placement="left" content="从右边弹出">
    <t-button>左边</t-button>
</t-tooltip>
<t-tooltip placement="right" content="从右边弹出">
    <t-button>右边</t-button>
</t-tooltip>
<t-tooltip placement="top" content="从右边弹出">
    <t-button>上边</t-button>
</t-tooltip>
<t-tooltip placement="bottom" content="从右边弹出">
    <t-button>下边</t-button>
</t-tooltip>
```

:::

### 指令形式

通过指令`v-t-tooltip`来使用提示文字
:::demo 通过`v-t-tooltip:[trigger].[placement]="[content]"`来控制提示文字

```html

<t-button v-t-tooltip="'这是一个按钮'">鼠标经过我</t-button>
<t-button v-t-tooltip:hover.top="'上边'">在上边显示</t-button>
<t-button v-t-tooltip:hover.bottom="'下边'">在下边显示</t-button>
<t-button v-t-tooltip:hover.left="'左边'">在左边显示</t-button>
<t-button v-t-tooltip:hover.right="'右边'">在右边显示</t-button>
```

:::

### Attributes

| 参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|content|显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|placement|Tooltip 的出现位置|String|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
