const { Router } = require('express');
const { getOil, purchasedOil } = require('../controllers/oil.controller')
const pool = require('../db');

const router = Router();

router.get('/', async (req, res) => {
    
    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.json(result.rows[0].now);

})

router.get('/oil', getOil)

router.post('/purchased', purchasedOil)

module.exports = router;