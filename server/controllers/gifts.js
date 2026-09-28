import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const { search, audience, pricePoint } = req.query

        let selectQuery = 'SELECT * FROM gifts'
        const whereClauses = []
        const queryParams = []

        if (search) {
            queryParams.push(`%${search}%`)
            whereClauses.push(`(name ILIKE $${queryParams.length} OR description ILIKE $${queryParams.length})`)
        }

        if (audience) {
            queryParams.push(audience)
            whereClauses.push(`audience = $${queryParams.length}`)
        }

        if (pricePoint) {
            queryParams.push(pricePoint)
            whereClauses.push(`pricepoint = $${queryParams.length}`)
        }

        if (whereClauses.length > 0) {
            selectQuery += ' WHERE ' + whereClauses.join(' AND ')
        }

        selectQuery += ' ORDER BY id ASC'

        const results = await pool.query(selectQuery, queryParams)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getGiftById = async (req, res) => {
    try {
        const giftId = req.params.giftId
        const selectQuery = 'SELECT * FROM gifts WHERE id = $1'
        const results = await pool.query(selectQuery, [giftId])

        if (results.rows.length === 0) {
            return res.status(404).json({ message: 'Gift not found' })
        }

        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getGifts,
    getGiftById
}
