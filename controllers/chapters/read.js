import Chapter from '../../models/Chapter.js'
import Comment from '../../models/Comment.js'


const allChapters = async (req, res, next) => {
    try {
        const {id} = req.query
        let chapters = await Chapter.find({manga_id: id})
        res.status(200).json({
            success: true,
            response: chapters
        })
    } catch (error) {
        next(error)
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

let getCommentsByChapterId = async (req, res, next) => {
    try {
        const chapterId = req.params.chapterId;

        const comments = await Comment.find({ chapter_id: chapterId })

            .populate("author_id", "name photo")
            .populate("company_id", "name photo");

        res.status(200).json({
            response: comments
        });
    } catch (error) {
        next(error);
    }
};

export { allChapters, chapterById, getCommentsByChapterId }