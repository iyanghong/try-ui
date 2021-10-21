### 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 行

:::demo

```html

<t-row>一行</t-row>
<t-row>一行</t-row>
<t-row>一行</t-row>
```

:::

### 分栏

:::demo

```html

<t-row :gutter="10">
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
</t-row>

```

:::

### 混合布局

:::demo

```html

<t-row :gutter="10">
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="12">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
</t-row>
<t-row :gutter="10">
    <t-col :span="3">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="6">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="3">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="9">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="3">
        <div class="flex-layout-content"></div>
    </t-col>
</t-row>
<t-row :gutter="10">
    <t-col :span="4">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="16">
        <div class="flex-layout-content"></div>
    </t-col>
    <t-col :span="4">
        <div class="flex-layout-content"></div>
    </t-col>
</t-row>
```

:::

### API

### Row Attributes

|参数|说明|类型|可选值|默认值
|---|---|---|---|---
|gutter|栅格间隔,会平均的对半分给左边跟右边间隔|number|—|0
|justify|flex 布局下的水平排列方式|string|start/end/center/space-around/space-between|start
|align|flex 布局下的垂直排列方式|string|top/middle/bottom|—
|tag|自定义元素标签|string|*|div

### Col Attributes

|参数|说明|类型|可选值|默认值
|---|---|---|---|---
|tag|自定义元素标签|string|*|div
|span|栅格占据的列数|number|—|24
|offset|栅格左侧的间隔格数|number|—|0
|push|栅格向右移动格数|number|—|0
|pull|栅格向左移动格数|number|—|0
|xs|<768px 响应式栅格数|number|—|—
|sm|≥768px 响应式栅格数|number|—|—
|md|≥992px 响应式栅格数|number|—|—
|lg|≥1200px 响应式栅格数|number|—|—
|xl|≥1920px 响应式栅格数|number|—|—

