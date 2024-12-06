import Comment from '../../models/Comment.js'

const allComments = async (req, res) => {
    try {
        let comments = await Comment.find()
        res.status(200).json({
            success: true,
            comments: comments
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const commentById = async (req, res, next) => {
    try {
        let comment = await Comment.findById(req.params.id)
        res.status(200).json({
            success: true,
            comment: comment
        })
    } catch (error) {
        next(error)
    }
}

const commentByAuthOrComp = async (req, res, next) => {
    try {
        const { author_id, company_id } = req.query; // Obtén los filtros de la query string
        const filter = {};

        if (author_id) filter.author_id = author_id; // Filtra por author_id si está presente
        if (company_id) filter.company_id = company_id; // Filtra por company_id si está presente

        const comments = await Comment.find(filter);
        res.status(200).json({
            success: true,
            respose: comments
        });
    } catch (error) {
        next(error)
    }
}

export { allComments, commentById, commentByAuthOrComp }