import Manga from '../../models/Manga.js'

const deleteManga = async (req, res) => {
    try {
        await Manga.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message: "Manga deleted successfully"
        })
    } catch (error) {
        next(error)
    }
}

export default deleteManga