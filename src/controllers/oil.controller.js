const pool = require('../db')

const getOil = async (req, res, next) => {
    
    try {

    const allOil = await pool.query('SELECT * FROM oil')

    res.json(allOil.rows)

    } catch(error) {
        
        next(error)

    }
}

const purchasedOil = async (req, res, next) => {
    const { title, description, price, qty } = req.body;

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    try {
        const result = await pool.query("INSERT INTO oil (brand, description, price, qty, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
            title,
            description,
            price,
            qty,
            formattedDate
        ]);

        console.log(result.rows[0])
        res.send('yep')
    } catch (error) {

        next(error)

    }
}

module.exports = { 
    getOil,
    purchasedOil
}