## 图标

提供了一套常用的图标集合。

### 使用方法

通过设置类名来使用：比如`t-icon-iconName`
:::demo

```html

<i class="t-icon-label" />
<i class="t-icon-save" />
<i class="t-icon-edit" />
```

:::
<ul>
   <li v-for="icon in $icons.glyphs">
	   <div class="icon"><i :class="'t-icon-' + icon.font_class"></i></div>
	   <div class="name">{{icon.name}}</div>
	   <div class="code-name">t-icon-{{icon.font_class}}</div>
   </li>
</ul>
