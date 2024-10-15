require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code </h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code </h2>')
})

const githubData = {
    "login": "SKDPROGRAMMER-AMANKUMAR",
    "id": 165259703,
    "node_id": "U_kgDOCdmptw",
    "avatar_url": "https://avatars.githubusercontent.com/u/165259703?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR",
    "html_url": "https://github.com/SKDPROGRAMMER-AMANKUMAR",
    "followers_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/followers",
    "following_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/following{/other_user}",
    "gists_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/subscriptions",
    "organizations_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/orgs",
    "repos_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/repos",
    "events_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SKDPROGRAMMER-AMANKUMAR/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Aman Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "An Enthusiastic beginner Programmer\r\n",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-03-28T08:19:55Z",
    "updated_at": "2024-09-21T12:45:53Z"
  }

  app.get('/github',(req,res)=>{
    res.json(githubData)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})