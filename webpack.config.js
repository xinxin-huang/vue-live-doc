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
                [ require('markdown-it-container'), 'live', {
                  validate: function (params) {
                    return new RegExp('(all|code|live)').test(params.trim())
                  },
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
