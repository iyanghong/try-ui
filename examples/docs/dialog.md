## 会话框(Dialog)

### 基础用法

:::demo

```html
<t-button type="info" @click="success">成功</t-button>
<t-button type="info" @click="warning">警告</t-button>
<t-button type="info" @click="danger">错误</t-button>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      success() {
        this.$dialog({
          title: '确定',
          content: '你确定吗？',
          positiveText: '确定',
          negativeText: '不确定',
          onPositiveClick: () => {
            this.$message({
              type: 'success',
              message: 'submit',
            });
          },
          onNegativeClick: () => {
            this.$message({
              type: 'info',
              message: '取消',
            });
          },
        });
      },
      warning() {
        this.$dialog({
          type: 'warning',
          title: '警告',
          content: '真香啊~',
          onPositiveClick: () => {
            this.$message({
              type: 'success',
              message: 'submit',
            });
          },
        });
      },
      danger() {
        this.$dialog({
          type: 'danger',
          title: '错误',
          content: '你和ta结束了！',
          onPositiveClick: () => {
            this.$message({
              type: 'success',
              message: 'submit',
            });
          },
        });
      },
    },
  };
</script>
```

:::

### Dialog Attribute

| 参数          | 说明           | 类型   | 可选值                 | 默认值  |
| ------------- | -------------- | ------ | ---------------------- | ------- |
| title         | 对话框标题     | string | -                      | -       |
| content       | 对话框文字内容 | string | -                      | -       |
| type          | 对话框类型     | string | warning/success/danger | success |
| negative-text | 按钮文字       | string | -                      | 算了    |
| positive-text | 按钮文字       | string | -                      | 确认    |

### Dialog Events

| 参数            | 说明     | 类型     | 可选值 | 默认值 |
| --------------- | -------- | -------- | ------ | ------ |
| onPositiveClick | 按钮事件 | function | -      | -      |
| onNegativeClick | 按钮事件 | function | -      | -      |
