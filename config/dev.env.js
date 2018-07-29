var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	ENV_CONFIG: '"dev"',
	// BASE_API: '"http://localhost:3002/appH5"',
	BASE_API: '"https://api.app.angel.jyw91.com/appH5"',
	IMG_API: '"http://api.pc.angel.jyw91.com"',
	IMG_URL: '"http://image.angel.jyw91.com"'
})
