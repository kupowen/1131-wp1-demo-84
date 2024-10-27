import express from 'express'
const app =express()

// import db from './utils/database.js'
import db from './utils/database.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/blog_84', async (req, res) => {
    try {
        const results = await db.query(`select * from blog_84`)
        console.log('blogs', JSON.stringify(results.rows))
        res.render('blog_84', {
            blogs: results.rows, 
            pinfo:'PoWen Ku, 212410384' 
        })
    }catch(error){
        console.log(error)
    }
})

app.get('/api/blog_84', async (req, res) => {
    try {
        const results = await db.query(`select * from blog_84`)
        res.json(results.rows)
    }catch(error){
        console.log(error)
    }
})

app.use('/', (req, res, next)=> {
    res.send('Powen Ku, 212410384')
})

const port = process.env.PORT || 3000
app.listen(port, () => (
    console.log(`srever running on port ${port}`)
))
