## 按钮(Button)

### 基本用法

:::demo 属性`type`来控制按钮的状态类型

```html

<t-button>Default</t-button>
<t-button type="primary">Primary</t-button>
<t-button type="success">Success</t-button>
<t-button type="warning">Warning</t-button>
<t-button type="danger">Danger</t-button>
```

:::

### 圆角按钮

:::demo 通过属性`round`来声明按钮的圆角

```html

<t-button round>Default</t-button>
<t-button type="primary" round>Primary</t-button>
<t-button type="success" round>Success</t-button>
<t-button type="warning" round>Warning</t-button>
<t-button type="danger" round>Danger</t-button>
```

:::

### 禁用状态

:::demo 你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。

```html

<t-button disabled>Default</t-button>
<t-button type="primary" disabled>Primary</t-button>
<t-button type="success" disabled>Success</t-button>
<t-button type="warning" disabled>Warning</t-button>
<t-button type="danger" disabled>Danger</t-button>
```

:::

### 图标按钮

:::demo 你可以使用`icon`属性来定义按钮图标

```html

<t-button icon="t-icon-edit"></t-button>
<t-button icon="t-icon-save"></t-button>
<t-button icon="t-icon-share">分享</t-button>
```

:::

### 不同尺寸

:::demo 你可以使用`size`属性来定义按钮的尺寸

```html

<t-button>默认</t-button>
<t-button size="medium">中等</t-button>
<t-button size="small">小型</t-button>
<t-button size="mini">超小</t-button>
```

:::

### 按钮组

:::demo 使用`<t-button-group>`标签来嵌套你的按钮。

```html

<t-button-group>
    <t-button type="primary" icon="t-icon-edit">编辑</t-button>
    <t-button type="primary" icon="t-icon-save">保存</t-button>
    <t-button type="primary" icon="t-icon-copy">复制</t-button>
</t-button-group>
```

:::

### Api

