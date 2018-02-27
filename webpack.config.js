// emoji 快捷键
const emojiFullJson = require('markdown-it-emoji/lib/data/full.json')
const emojiShortcuts = require('markdown-it-emoji/lib/data/shortcuts.js')
const emojiShortcutsNow = JSON.parse(JSON.stringify(emojiShortcuts))
for (let k in emojiFullJson) {
  const sk = ':e:' + k
  if (emojiShortcutsNow[ k ]) {
    emojiShortcutsNow[ k ] = emojiShortcutsNow[ k ].concat([ sk ])
  } else {
    emojiShortcutsNow[ k ] = [ sk ]
  }
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'vue-loader' },
          {
            loader: 'vue-md-loader',
            options: {
              rules: {
                'table_open': function () { return '<table class="falcon-table">' },
                'table_close': function () { return '</table>' }
              },
              plugins: [
                require('markdown-it-abbr'),
                require('markdown-it-attrs'),
                require('markdown-it-checkbox'),
                require('markdown-it-sub'),
                require('markdown-it-sup'),
                [ require('markdown-it-task-lists'), {
                  enabled: true,
                  label: true,
                  labelAfter: true
                } ],
                [ require('markdown-it-emoji'), {
                  shortcuts: emojiShortcutsNow
                } ],
                // 运行代码的容器定义，用":::"匹配md文件中的需要运行的代码块
                [ require('markdown-it-container'), 'live', {
                  validate: function (params) {
                    return new RegExp('(all|code|live)').test(params.trim())
                  },
                  // 将捕获的代码块装进自定义组件falcon-demo中
                  render: function (tokens, idx) {
                    if (tokens[ idx ].nesting === 1) {
                      var info = tokens[ idx ].info
                      // opening tag
                      return '<falcon-demo info="' + info.trim() + '">'
                    } else {
                      // closing tag
                      return '</falcon-demo>'
                    }
                  }
                } ]
              ],
              // 用"<!--"匹配代码块，给运行结果加一个父容器
              afterProcessLiveTemplate: function (template) {
                return `<div class="falcon-demo__live">${template}</div>`
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}
