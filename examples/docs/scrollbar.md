## 滚动条(Scrollbar)

美化滚动条

### 基本用法

:::demo

```html

<t-scrollbar style="height: 200px;width: 300px">
    <div class="demo-item" v-for="n in 10" v-text="n"></div>
</t-scrollbar>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>
```
