import axios from '../plugins/axios'


export const testPost = () => axios.post(`http://angrykitty.link:40439/v1/events`, {
    testApp:2
  })

export const testGet = () =>  axios.get(`http://angrykitty.link:40439/v1/events`, {
    testApp:1
  })

export const testPut = () => axios.put(`http://angrykitty.link:40439/v1/events`, {query:1}, {body:2})