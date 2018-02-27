/**
 * Created by guoyangyang on 2017/8/9.
 */
module.exports = {
  plugins: {
    'postcss-salad': {
      browsers: ['ie > 8', 'last 2 versions', 'Chrome > 24'],
      features: {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    }
  }
}
