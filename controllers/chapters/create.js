import Chapter from '../../models/Chapter.js'
import Comment from '../../models/Comment.js'

const create = async (req, res, next) => {
    try {
        let newChapter = await Chapter.create(req.body)
        res.status(201).json({
            success: true,
            chapter: newChapter
        })
    } catch (error) {
        next(error)
    }
}

// Crear un nuevo comentario en un capítulo
const createComment = async (req, res, next) => {
    try {
        const chapterId = req.params.chapterId;
        const { message, author_id, company_id } = req.body;

        const chapter = await Chapter.findById(chapterId);

        if (!chapter) {
            return res.status(404).json({ success: false, message: "Capítulo no encontrado" });
        }

        const newComment = new Comment({
            chapter_id: chapterId,
            author_id,
            company_id,
            message,
        });

        await newComment.save();

        res.status(201).json({
            success: true,
            response: newComment
        });
    } catch (error) {
        next(error)
    }
};


export { create, createComment }