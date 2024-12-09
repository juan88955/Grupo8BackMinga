import Author from "../../models/Author.js"
import Company from "../../models/Company.js"
import Manga from "../../models/Manga.js";

export const getManagerProfile = async (req, res) => {
    try {
        const userId = req.user._id;

        const author = await Author.findOne({ user_id: userId });
        if (author) {
            const mangas = await Manga.find({ creator_id: author._id });
            return res.status(200).json({
                role: 'Author',
                profile: author,
                mangas: mangas

            });
        }

        const company = await Company.findOne({ user_id: userId });
        if (company) {
            const mangas = await Manga.find({ creator_id: company._id });
            return res.status(200).json({
                role: 'Company',
                profile: company,
                mangas: mangas
            });
        }

        return res.status(403).json({ message: 'You do not have an Author or Company profile.' });
    } catch (error) {
        next(error)
    }
}
