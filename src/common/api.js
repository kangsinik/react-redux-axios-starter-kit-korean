import axios from 'axios'

const serverUrl = 'http://localhost:9000'

class serverApi {
  static getServerInfoFromServer (servers) {
    axios.get(serverUrl + '/nodes/PROJECT')
    .then(response => {
      // servers.push(response.data)
      return response.data
    }) // arrow function -> anonymous function
    .catch(response => { console.log(response) })
  }

}

export default serverApi
