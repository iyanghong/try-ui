## 消息提示(Message)

### 基础用法

从顶部出现，3 秒后自动消失。

:::demo

```html
<t-button type="info" @click="handleOpen">open消息提示</t-button>
<t-button type="info" @click="handleOpenVN">VNode</t-button>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleOpen() {
        this.$message('这是一条信息');
      },
      handleOpenVN() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [h('i', { style: 'color: teal' }, 'VNode')]),
        });
      },
    },
  };
</script>
```

:::

### 不同状态

提供四种不同情况的状态

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

### 手动关闭的

设定 duration 为 0 使消息提示不会自动关闭

:::demo

```html
<t-button type="info" @click="open">打开</t-button>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      open() {
        this.$message({
          type: 'info',
          message: '手动关闭的',
          duration: 0,
          showClose: true,
        });
      },
    },
  };
</script>
```

:::

### 位置

设定 placement 使消息提示出现的位置不同

:::demo

```html
<t-button type="info" @click="openTop">顶部</t-button>
<t-button type="info" @click="openTopLeft">上左</t-button>
<t-button type="info" @click="openTopRight">上右</t-button>
<t-button type="info" @click="openBottom">底部</t-button>
<t-button type="info" @click="openBottomLeft">下左</t-button>
<t-button type="info" @click="openBottomRight">下右</t-button>

<script>
  export default {
    methods: {
      openTop() {
        this.$message({
          type: 'info',
          message: '顶部',
        });
      },
      openTopLeft() {
        this.$message({
          type: 'info',
          message: '上左',
          placement: 'top-left',
        });
      },
      openTopRight() {
        this.$message({
          type: 'info',
          message: '上右',
          placement: 'top-right',
        });
      },
      openBottom() {
        this.$message({
          type: 'info',
          message: '底部',
          placement: 'bottom-center',
        });
      },
      openBottomLeft() {
        this.$message({
          type: 'info',
          message: '下左',
          placement: 'bottom-left',
        });
      },
      openBottomRight() {
        this.$message({
          type: 'info',
          message: '下右',
          placement: 'bottom-right',
        });
      },
    },
  };
</script>
```

:::

### API

### Message Attributes

| 参数      | 说明                                          | 类型         | 可选值                     | 默认值 |
| --------- | --------------------------------------------- | ------------ | -------------------------- | ------ |
| message   | 消息文字                                      | string/VNode | --                         | --     |
| type      | 主题                                          | string       | info/success/warning/error | info   |
| icon      | 图标                                          | string       | --                         | --     |
| duration  | 显示时长,单位:毫秒,设为 0 则不会自动关闭      | string       | --                         | 3000   |
| showClose | 是否显示关闭按钮                              | boolean      | --                         | false  |
| center    | 文字是否居中                                  | boolean      | --                         | false  |
| onClose   | 关闭时的回调函数, 参数为被关闭的 message 实例 | function     | --                         | --     |
| offset    | Message 距离窗口顶部的偏移量                  | number       | --                         | 20     |
