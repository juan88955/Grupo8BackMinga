const error_handler = (error, req, res) => {
    return res.status(500).json({
        success: false,
        message: `Error 500 - An internal server error occurred in the path '${req.originalUrl}' using the method '${req.method}'. Details: ${error.message || 'Error unknown'}`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    })
}

export default error_handler