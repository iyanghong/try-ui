### 选择器(Select)

### 基本用法

:::demo

```html

<t-row>
    <t-col :span="4">
        <t-select v-model="person" :items="items"></t-select>
    </t-col>
</t-row>

<script>
    export default {
        data(){
            return {
                person : '张三',
                items:[
                    {label:'张三',value:'张三'},
                    {label:'李四',value:'李四'},
                    {label:'王五',value:'王五'}
                ]
            }
        }
    }
</script>
```

:::
