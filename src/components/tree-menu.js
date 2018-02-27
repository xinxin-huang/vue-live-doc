export default {
  props: {
    routes: {
      type: Array,
      default () {
        return []
      }
    },
    mode: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    style () {
      return this.mode === 'horizontal' ? {} : { height: '100%' }
    }
  },
  watch: {
    $route () {
      this.$refs.content && this.$refs.content.scrollTo(0, 0)
    }
  },
  methods: {
    elements (routes, r) {
      return routes
        .map(route => {
          if (!route.paths) route.paths = []
          if (route.children && route.children.length) {
            return r(
              'el-submenu',
              {
                props: {
                  index: route.name
                }
              },
              [
                r(
                  'span',
                  {
                    slot: 'title'
                  },
                  [
                    route.meta.text
                  ]
                ),
                this.elements(route.children, r, ...route.paths)
              ]
            )
          } else if (route.path) {
            return r(
              'el-menu-item',
              {
                props: {
                  index: route.name
                }
              },
              [
                route.meta.text
              ]
            )
          } else {
            return null
          }
        })
        .filter(item => item)
    },
    onSelect (index) {
      this.$router.push({ name: index })
    }
  },
  render (r) {
    return r(
      'el-menu',
      {
        style: this.style,
        props: {
          mode: this.mode,
          defaultActive: this.$route.name
        },
        on: {
          select: this.onSelect
        }
      },
      this.elements(this.routes, r)
    )
  }
}
