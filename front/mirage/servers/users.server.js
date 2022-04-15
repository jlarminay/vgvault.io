import { Model } from 'miragejs'

export function userModels() {
  return { user: Model }
}

export function userSeeds(server) {
  server.create('user', { name: 'Bob' })
  server.create('user', { name: 'Alice' })
  server.create('user', { name: 'John' })
}

export function userRoutes(ref, namespace) {
  ref.get(`${namespace}/users`, (schema) => {
    return schema.users.all()
  })
}
