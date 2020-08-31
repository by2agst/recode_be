const { sanitizeEntity } = require('strapi-utils')

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model
  })

module.exports = {
  /**
   * Retrieve authenticated user.
   * @return {Object|Array}
   */
  async updateMe (ctx) {
    const { id } = ctx.state.user
    let body = ctx.request.body
    delete body.confirmed
    delete body.blocked

    const data = await strapi.plugins['users-permissions'].services.user.edit({ id }, body)
    ctx.send(sanitizeUser(data))
  }
}
