import api from '../plugins/api'


export const testPost = () => api.post(`http://angrykitty.link:40439/v1/events`, {
    testApp:2
  })

export const testGet = () =>  api.get(`http://angrykitty.link:40439/v1/events`, {
    testApp:1
  })