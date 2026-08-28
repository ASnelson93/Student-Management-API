const errorHandler = (err, req, res ,next) => {

    res.status(500).json({
        success: false,
        error : 'Internal Server Error'
        })
}

module.exports = errorHandler