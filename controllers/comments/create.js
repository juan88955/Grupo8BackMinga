import Comment from '../../models/Comment.js'

const create = async (req, res, next) => {
    try {
        // Obtener el ID del capítulo de los parámetros de la URL
        const chapter_id = req.params.chapter_id;
        const { message, author_id, company_id } = req.body;

        if (!chapter_id) {
            return res.status(400).json({
                success: false,
                message: 'Se requiere ID del capítulo'
            });
        }

        if (!message) {
            return res.status(400).json({
                success: false,
                message: 'Se requiere mensaje del comentario'
            });
        }

        const commentData = {
            chapter_id,
            message,
            author_id,     // opcional
            company_id     // opcional
        };

        let newComment = await Comment.create(commentData);
        
        res.status(201).json({
            success: true,
            response: newComment
        });
    } catch (error) {
        next(error);
    }
}

export default create