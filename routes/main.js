const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({
        status: 'OK',
        versao: '1'
    })
})

module.exports = router