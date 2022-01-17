const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', './public/views')


app.get('/', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
    // axios.get('https://localhost:6000').then((response) => {

    res.render('index', {
      title: "Tabel User",
      table: response.data,
      errorMessage: null
    })
  }).catch((error) => {
    res.render('index', {
      title: "Tabel User",
      table: [],
      errorMessage: "Gagal Mendapatkan Data User"
    })
  })

})


app.get('/album', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((response) => {
    // axios.get('https://localhost:6000').then((response) => {
    // console.log(response.data)
    res.render('album', {
      title: "Album",
      album: response.data,
      errorMessage: null
    })

  }).catch((error) => {
    res.render('album', {
      title: "Album",
      album: [],
      errorMessage: "Gagal Mendapatkan Data Album"
    })
  })
})

// tulis dibawah sini

app.get('/aliffadel', (req, res) => {
  res.render('aliffadel', {
    username: 'aliffadel',
    email: 'apaajabole@binar.com'

  })
})

app.get('/alifiandyn', (req, res) => {
  let data = {
    nama: 'Alifiandy',
    profilePicture: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=800x600&vertical=top',
    bio: 'awdadwadwawddawdawdwaawdawddawawddawdawwdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  }
  res.render('alifiandyn', data)
})




app.get('/avinska', (req, res) => {

  res.render('avinska', {
    name: 'Avinska',
    username: 'abins',
    email: 'avinskat@gmail.com'
  })

})



const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server Berjalan pada port ${5000}`)
})