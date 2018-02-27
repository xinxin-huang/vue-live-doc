/* eslint-disable */
const homeMd = {
  component: r => require([ '../../docs/how-to-use.md' ], r),
  meta: {
    text: '如何开始.md'
  }
}

let routes = [
  Object.assign(
    {
      path: '', name: 'home'
    },
    homeMd
  ),
  Object.assign(
    {
      path: '/get-start-md', name: 'home-md'
    },
    homeMd
  ),
  {
    path: '/tree', // top顶级需要用'／'开头，其它级则不需要
    name: 'tree',
    meta: {
      text: '一级菜单',
    },
    component: {
      render () {
        return <router-view></router-view>
      }
    },
    children: [
      Object.assign({ path: 'vue', name: 'tree-vue' }, homeMd),
      {
        path: 'sub',
        name: 'tree-sub',
        meta: {
          text: '二级菜单',
        },
        component: {
          render () {
            return <router-view></router-view>
          }
        },
        children: [
          Object.assign({ path: 'leaf', name: 'tree-leaf' }, homeMd)
        ]
      }
    ]
  },
]

export default routes
