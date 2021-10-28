## 消息提示(Message)

### 基础用法

:::demo

```html
<t-button type="info" @click="handleOpen">open消息提示</t-button>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleOpen() {
        this.$message('这是一条信息');
      },
    },
  };
</script>
```

:::

### 不同状态

:::demo

```html
<t-button type="info" @click="info">消息</t-button>
<t-button type="info" @click="success">成功</t-button>
<t-button type="info" @click="warning">警告</t-button>
<t-button type="info" @click="danger">错误</t-button>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      info() {
        this.$message('这是一条信息');
      },
      success() {
        this.$message({
          type: 'success',
          message: '追到ta啦',
        });
      },
      warning() {
        this.$message({
          type: 'warning',
          message: '一个人少走夜路',
        });
      },
      danger() {
        this.$message({
          type: 'danger',
          message: 'emo了',
        });
      },
    },
  };
</script>
```

:::
