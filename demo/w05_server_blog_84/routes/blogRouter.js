import express from 'express'
const router = express.Router()

import db from '../utils/database.js'

router.get('/', async (req, res) => {
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

export default router
