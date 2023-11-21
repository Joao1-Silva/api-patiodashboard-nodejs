const { Router } = require('express');
const { getOil, purchasedOil } = require('../controllers/oil.controller')
const pool = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    
    const result = await pool.query('SELECT users.name, level.name AS level_name, level.level AS user_level FROM users JOIN level ON users.level = level.level')
    console.log(result)
    res.json(result.rows[0].now);

})

router.get('/oil', getOil)

router.post('/purchased', purchasedOil)

module.exports = router;