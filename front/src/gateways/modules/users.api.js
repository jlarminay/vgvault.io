import connection from '../connection'

export default {
  async getAll() {
    const response = await connection.get(`/users`)
    if (!response) return false
    return response.data
  },
}
