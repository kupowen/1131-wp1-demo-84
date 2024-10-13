import express from 'express'
const app =express();

// import db from './utils/database.js'

import db from './utils/database-supabase.js'

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
