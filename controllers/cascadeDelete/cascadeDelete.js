import Author from '../../models/Author.js'
import Company from '../../models/Company.js'
import Manga from '../../models/Manga.js'
import Chapter from '../../models/Chapter.js'
import Comment from '../../models/Comment.js'
import Reaction from '../../models/Reaction.js'

const cascadeDeletion = {
    deleteAll: async(req, res) => {
        try {
            const { type, id } = req.params

            if (type === 'author') {
                const authorMangas = await Manga.find({ author_id: id })
                
                for (const manga of authorMangas) {
                    await Chapter.deleteMany({ manga_id: manga._id })
                    await Comment.deleteMany({ manga_id: manga._id })
                    await Reaction.deleteMany({ manga_id: manga._id })
                }
                
                await Manga.deleteMany({ author_id: id })
                await Author.findByIdAndDelete(id)
                
                return res.status(200).json({
                    success: true,
                    message: ['Author and all related content deleted successfully']
                })
                
            } else if (type === 'company') {
                const companyMangas = await Manga.find({ company_id: id })
                
                for (const manga of companyMangas) {
                    await Chapter.deleteMany({ manga_id: manga._id })
                    await Comment.deleteMany({ manga_id: manga._id })
                    await Reaction.deleteMany({ manga_id: manga._id })
                }
                
                await Manga.deleteMany({ company_id: id })
                await Company.findByIdAndDelete(id)
                
                return res.status(200).json({
                    success: true,
                    message: ['Company and all related content deleted successfully']
                })
            }
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: [error.message]
            })
        }
    }
}

export default cascadeDeletion