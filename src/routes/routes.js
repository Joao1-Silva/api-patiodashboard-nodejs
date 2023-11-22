const { Router } = require('express');
const { getOil, purchasedOil } = require('../controllers/oil.controller')
// const pool = require('../db');
const { sql } = require('@vercel/postgres')

const router = Router();

router.get('/', async (req, res) => {
    
    const result = await sql`SELECT users.name, level.name AS level_name, level.level AS user_level FROM users JOIN level ON users.level = level.level;`
    const w = result.row[0]
    console.log(w.now)
    res.json(w.now);

})

router.get('/oil', getOil)

router.post('/purchased', purchasedOil)

module.exports = router;