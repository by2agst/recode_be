const _ = require('lodash')
const jwt = require('jsonwebtoken')

module.exports = {
  async refreshToken (ctx) {
    try {
	    const { jwt } = _.assign(ctx.request.body)
      const { id } = await this.verify(jwt)
      const user = await strapi.query('user', 'users-permissions').findOne({ id })
      ctx.send({
        jwt: strapi.plugins['users-permissions'].services.jwt.issue({
          id: user.id
        })
      })
    } catch (e) {
      console.log(e)
      return ctx.badRequest(null, 'Invalid token')
    }
  },

  verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        _.get(strapi.plugins, ['users-permissions', 'config', 'jwtSecret']),
        { ignoreExpiration: true },
        (err, tokenPayload = {}) => {
          if (err) {
            return reject(new Error('Invalid token.'))
          }
          resolve(tokenPayload)
        }
      )
    })
  }
}
