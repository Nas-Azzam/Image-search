import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID TjM8Umu3QPoivVaudsFPr4d0iBlpMs9hrsfJry_Y2hI',
  },
})
