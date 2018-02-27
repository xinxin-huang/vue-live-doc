const path = require('path')
const express = require('express')
const pkg = require('./package.json')

/* 基础配置 */
const port = 9898

const app = express()

app.set('views', 'dist')
app.engine('.html', require('ejs').__express)
app.set('view engine', 'html')
app.use('/static', express.static(path.resolve(__dirname, './dist'), { index: false }))

app.get(['/', '/vue-doc-live', /^\/vue-live-doc/], function (req, res) {
  res.render('vue-live-doc/index.html')
})

app.listen(port, function () {
  console.log(pkg.name, pkg.version, 'is running @ ', port)
})
