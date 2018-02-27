<template>
  <div class="falcon-demo"
       :custom-style="customStyle"
       :class="classComputed">
    <slot></slot>
    <section class="falcon-demo__control" v-if="style.codeFolder">
      <el-button type="primary" size="small" plain @click="trigger">
        {{ showCode ? '收起代码' : '查看代码' }}
      </el-button>
    </section>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'falcon-demo',
    props: [ 'info' ], // 接收loader编译后传递过来的控制风格的字符串
    data () {
      return {
        showCode: false,
        style: {
          allHidden: 0,
          codeFolder: 0,
          codeHidden: 0,
          codeNoBorder: 0,
          liveDark: 0,
          liveFull: 0,
          liveNoBorder: 0
        }
      }
    },
    computed: {
      customStyle () { // 解析控制风格的字符串，生成对应的样式配置
        this.info.split('-').forEach((name, index) => {
          const id = name.trim()
          const cur = index + 1
          this.style.hasOwnProperty(id) && (this.style[ id ] = cur)
        })
        // 互斥
        if (this.style.codeFolder && this.style.codeHidden) {
          if (this.style.codeFolder > this.style.codeHidden) {
            this.style.codeHidden = 0
          } else {
            this.style.codeFolder = 0
          }
        }
        return this.info
      },
      classComputed () { // 基于样式配置，生成最终的class组合
        const obj = {}
        if (this.style.codeFolder) obj[ 'falcon-demo--showcode' ] = this.showCode
        else if (this.style.codeHidden) obj[ 'falcon-demo--showcode' ] = false
        else obj[ 'falcon-demo--showcode' ] = true
        for (let k in this.style) {
          obj[ 'falcon-demo--' + k.toLowerCase() ] = !!this.style[ k ]
        }
        return obj
      }
    },
    methods: {
      trigger () {
        this.showCode = !this.showCode
      }
    }
  }
</script>
