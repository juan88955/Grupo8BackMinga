import Author from "../../models/Author.js"
import Company from "../../models/Company.js"
import Manga from "../../models/Manga.js";

export const getProfile = async (req, res) => {
    try {
        const userId = req.user._id;

        // Verifico si es Author
        const author = await Author.findOne({ user_id: userId }).populate('user_id').exec()
        console.log(author);
        
        if (author) {
            const mangas = await Manga.find({ creator_id: author._id }).populate('category_id').exec();
            return res.status(200).json({
                role: 'Author',
                profile: author,
                mangas: mangas

            });
        }

        const company = await Company.findOne({ user_id: userId });
        if (company) {
            const mangas = await Manga.findOne({ creator_id: company._id }).populate('category_id').exec();
            return res.status(200).json({ 
                role: 'Company', 
                profile: company, 
                mangas: mangas });
        }

        return res.status(403).json({ message: 'You do not have an Author or Company profile.' });
    } catch (error) {
        next(error)
    }
}
