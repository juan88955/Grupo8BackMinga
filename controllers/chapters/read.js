import Chapter from '../../models/Chapter.js'
import Comment from '../../models/Comment.js'


const allChapters = async (req, res) => {
    try {
        let chapters = await Chapter.find()
        res.status(200).json({
            success: true,
            response: chapters
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const chapterById = async (req, res, next) => {
    try {
        let chapter = await Chapter.findById(req.params.id)
        res.status(200).json({
            success: true,
            response: chapter
        })
        console.log(chapter);
        
    } catch (error) {
        next(error)
    }
}

// Obtener comentarios de un capítulo
let getCommentsByChapterId = async (req, res, next) => {
    try {
        const chapterId = req.params.chapterId;
        const chapter = await Chapter.findById(chapterId);
        const comments = await Comment.find({ chapter_id: chapterId });

        res.status(200).json({
            response: { ...chapter.toObject(), comments }
        });
    } catch (error) {
        next(error);
    }
};

export { allChapters, chapterById, getCommentsByChapterId }