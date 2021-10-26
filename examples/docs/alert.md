## Alert 警告

用于页面中展示重要的提示信息。

### 基本使用

:::demo 默认有五种主题颜色的tag，除了默认色还包括`primary` `info` `success` `danger` `warning`，可通过`type`属性来设置

```html

<t-alert title="Default">Gee it's good to be back home</t-alert>
<t-alert type="info" title="Info">Gee it's good to be back home</t-alert>
<t-alert type="success" title="Success">Gee it's good to be back home</t-alert>
<t-alert type="warning" title="Warning">Gee it's good to be back home</t-alert>
<t-alert type="danger" title="Danger">Gee it's good to be back home</t-alert>
```

:::

### 可关闭的

:::demo 可通过`closable`属性来声明可关闭警告框

```html
<t-alert title="Default" closable>Gee it's good to be back home</t-alert>
<t-alert type="info" title="Info" closable>Gee it's good to be back home</t-alert>
<t-alert type="success" title="Success" closable>Gee it's good to be back home</t-alert>
<t-alert type="warning" title="Warning" closable>Gee it's good to be back home</t-alert>
<t-alert type="danger" title="Danger" closable>Gee it's good to be back home</t-alert>
```

:::
