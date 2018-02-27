import _ from 'lodash'
import pkg from '../package.json'

let config = {
  name: _.capitalize(pkg.name),
  version: pkg.version,
  baseUri: '/' + _.kebabCase(pkg.name)
}

export default config
