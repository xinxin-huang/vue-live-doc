::: allHidden
```html
// 用于在本md文件统一引入外部资源，定义样式
<template></template>
<script>
  import _ from 'lodash'
</script>
<style>
  .cus-input {
    color: #84c137;
  }
  .cus-output {
    color: #42a9f4;
  }
</style>
<!-- common-import.vue -->
```
:::

# :e:point_right 开始编写你的文档

> :e:white_check_mark [ElementUI](http://element-cn.eleme.io/#/zh-CN/component/installation)作为默认UI组件库<br>
  :e:white_check_mark 支持.md和.vue格式进行编写<br>
  :e:smile 通常将文档分类放入docs目录

本文档写法在原有语法上加了一些扩展，常用的语法和功能见下面的举例：

## 复选框
[ ] 选项1
[x] 选项2
[ ] 选项3

---
## 缩写标注
*[SF]: Skyeye Falcon

### The SF is a nice team !

---
## 文字

普通
**粗体**
_斜体_
~~删除线~~
<u>下划线</u>

---
## 普通列表

- 选项1
- 选项2
    - 子选项1
    - 子选项2
- 选项3

---
## 多选列表

> 带复选框的列表，一般用于Todo List Or Task List

- [ ] 事项1
- [x] 事项2
- [ ] 事项3
- [x] 事项4
- [ ] 事项5

---
## 表格

|参数|说明|类型|默认值|可选值|必填
|:---|:---|:---|:---|:---|:---|:---
|name|名称|String|falcon|-|false

---
## H*

# h1
## h2
### h3
#### h4
##### h5

---
## 特殊符号

> ～，等价于"sub"标签；^，等价于"sup"标签

### H~i~, F^a^lcon

---
## Emoji
> 使用规则，":e: + [表情代码](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)"

### :e:imp :e:smile, i :e:heart falcon :e:thumbsup :e:thumbsup :e:thumbsup :e:100

---
## 简单的，低动态性的UI组件
<el-tag type="info">标签三</el-tag>
<br><br>
<el-alert
    title="成功提示的文案"
    type="success">
</el-alert>
<br>
<el-steps :active="0" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

---
## 代码块

### javascript
```javascript
const msg = 'hi, falcon docs'
console.log(msg)
```

### vue
```html
<template>

</template>
<script>

</script>
<style>

</style>
```

### css
```css
.demo-test-block {
  display: flex;
}
```

### html
```html
<el-button>Default Btn</el-button>
```

---
## 其它

- [在写md时增加HTML标签属性](https://github.com/arve0/markdown-it-attrs)

---
# :e:large_blue_diamond .md:Live

> Live由示例和代码块上下两部分组成，其中示例就是代码块运行的结果，代码块是代码的高亮显示<br>
  代码块支持的选项：无（就是不需要设置）、codeFolder、codeHidden、codeNoBorder<br>
  示例支持的选项：无（就是不需要设置）、liveDark、liveFull、liveNoBorder<br>
  开启选项设置：用"::: 选项"开头，用":::"结尾，多个选项用"-"进行连接，无顺序要求

### 默认
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- default.vue -->
```

---
## 代码块风格

> codeFolder和codeHidden是互斥的，即使你同时设置了也会采取后序覆盖机制，即后出现的生效

### 可展开／收起（codeFolder）
::: codeFolder
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- codeFolder.vue -->
```
:::

### 隐藏（codeHidden）
::: codeHidden
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- codeHidden.vue -->
```
:::

### 无边框（codeNoBorder）
::: codeNoBorder
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- codeNoBorder.vue -->
```
:::

---
## 示例风格

### 暗色背景（liveDark）

:::liveDark
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- liveDark.vue -->
```
:::

### 铺满，无内边距（liveFull）

:::liveFull
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- liveFull.vue -->
```
:::

### 无边框（liveNoBorder）

:::liveNoBorder
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- liveNoBorder.vue -->
```
:::

---
## 综合示例：codeFolder-liveDark-liveNoBorder（顺序无关，用"-"连接即可）
::: codeFolder-liveDark-liveNoBorder
```html
<template>
  <label class="cus-input">Input: </label>
  <input type="text" v-model="msg">
  <h1 class="cus-output">Output: {{ msg | text-snake }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hi, Falcon'
      }
    },
    filters: {
      'text-snake': (v) => {
        return _.snakeCase(v)
      }
    }
  }
</script>
<!-- mix.vue -->
```
:::
