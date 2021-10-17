## 间隔(Space)

### 基础用法
:::demo
```html
<t-space>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
</t-space>
```
:::

### 垂直布局
:::demo 通过属性`vertical`来设置垂直布局
```html
<t-space vertical>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
</t-space>
```
:::

### 从尾部布局
:::demo 通过属性`justify`来设置水平排序方式，可用值为：`'start' | 'end' | 'center' | 'space-around' | 'space-between'`
```html
<t-space justify="end">
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
	<t-button>按钮</t-button>
</t-space>
```
:::


### Space Attribute
|参数|说明|类型|可选值|默认值
|---|---|---|---|---
|gutter|子元素的间隔|number|—|0
|justify|水平布局下的水平排列方式|string|start/end/center/space-around/space-between|start
|align|水平布局下的垂直排列方式|string|top/middle/bottom|—
|vertical|是否垂直布局|boolean|false	
