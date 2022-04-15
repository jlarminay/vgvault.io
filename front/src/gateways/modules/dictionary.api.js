import connection from '../connection'

export default {
  async searchWord(searchString) {
    try {
      const response = await connection.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchString}`)
      if (!response) return false
      return response.data[0]
    } catch (e) {
      console.log(e)
    }
  },
}
