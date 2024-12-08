import Comment from '../../models/Comment.js'

const allComments = async (req, res) => {
    try {
        let comments = await Comment.find()
            .populate({
                path: 'author_id',
                model: 'authors',  // Cambiado a 'authors' en minúsculas
                select: 'name photo email'
            })
            .populate({
                path: 'company_id',
                model: 'Companies',  // Cambiado a 'Companies'
                select: 'name photo email'
            })

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
            .populate({
                path: 'author_id',
                model: 'authors',
                select: 'name photo email'
            })
            .populate({
                path: 'company_id',
                model: 'Companies',
                select: 'name photo email'
            })

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
        const { author_id, company_id } = req.query;
        const filter = {};

        if (author_id) filter.author_id = author_id;
        if (company_id) filter.company_id = company_id;

        const comments = await Comment.find(filter)
            .populate({
                path: 'author_id',
                model: 'authors',
                select: 'name photo email'
            })
            .populate({
                path: 'company_id',
                model: 'Companies',
                select: 'name photo email'
            });

        res.status(200).json({
            success: true,
            response: comments
        });
    } catch (error) {
        next(error)
    }
}

export { allComments, commentById, commentByAuthOrComp }