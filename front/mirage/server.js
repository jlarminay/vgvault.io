import { createServer } from 'miragejs'
import { userModels, userSeeds, userRoutes } from './servers/users.server'

/* 
NOTES:
Miarge.js requires axios@0.21.1 to have passthrough function correctly
  https://github.com/miragejs/miragejs/issues/1006
  https://github.com/miragejs/miragejs/issues/1018
*/

const namespace = 'http://localhost:3000'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      ...userModels(),
    },

    seeds(server) {
      userSeeds(server)
    },

    routes() {
      userRoutes(this, namespace)

      // allow all other requests
      this.passthrough()

      // external APIs
      // this.passthrough('//unpkg.com/boxicons@2.1.2/**')
    },
  })
}
