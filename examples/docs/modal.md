## 模态框(Modal)

它会弹出来，然后给你看点东西。

### 基础用法

:::demo

```html
<t-modal :visible.sync="visible">
  <template slot="title">标题</template>
  <p>内容</p>
</t-modal>
<t-button @click="handleShow">弹出</t-button>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      handleShow() {
        this.visible = true;
      },
    },
  };
</script>
```

:::

### 使用 Dialog 预设

:::demo

```html
<t-modal
  :visible.sync="visible"
  show-icon
  width="400px"
  title="确认"
  content="你确认?"
  preset="dialog"
  type="success"
  negativeText="算了"
  positiveText="确认"
  @nagetive-click="handleNagetiveClick"
  @positive-click="handlePositiveClick">
</t-modal>
<t-button @click="handleShow">弹出</t-button>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      handleShow() {
        this.visible = true;
      },
      handleNagetiveClick() {
        this.$message({
          type: 'info',
          message: '取消',
        });
      },
      handlePositiveClick() {
        this.$message({
          type: 'success',
          message: 'submit',
        });
      },
    },
  };
</script>
```

:::

### Modal Attribute

| 参数                 | 说明                                                                        | 类型    | 可选值       | 默认值 |
| -------------------- | --------------------------------------------------------------------------- | ------- | ------------ | ------ |
| visible              | 是否显示（支持.sync 修饰符）                                                | Boolean | false / true | false  |
| title                | Modal 的标题，也可通过具名 slot （见下表）传入                              | string  | —            | —      |
| content              | Modal 的内容,当你不想使用 slot 时可直接预设                                 | string  | —            | —      |
| width                | Modal 的宽度                                                                | string  | —            | 50%    |
| height               | Modal 的高度                                                                | string  | —            | -      |
| fullscreen           | 是否为全屏 Modal                                                            | boolean | —            | false  |
| top                  | Modal CSS 中的 margin-top 值                                                | string  | —            | 15vh   |
| modal                | 是否需要遮罩层                                                              | boolean | —            | true   |
| append-to-body       | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Modal 的父元素上 | boolean | —            | true   |
| close-on-click-modal | 是否可以通过点击 modal 关闭 模态框                                          | boolean | —            | true   |
| show-close           | 是否显示关闭按钮                                                            | boolean | —            | true   |
| show-icon            | 是否显示图标                                                                | boolean | —            | false  |
| preset               | 模态框使用何种预设                                                          | string  | dialog       | -      |

### Slot

| name   | 说明             |
| ------ | ---------------- |
| —      | 模态框 的内容    |
| title  | 标题区的内容     |
| footer | 按钮操作区的内容 |

### Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| open     | 模态框 打开的回调 | —        |
| close    | 模态框 关闭的回调 | —        |
