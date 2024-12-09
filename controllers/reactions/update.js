import Reaction from '../../models/Reaction.js'

const update = async (req, res, next) => {
    try {
        const existingReaction = await Reaction.findById(req.params.id);

        if (!existingReaction) {
            return res.status(404).json({
                success: false,
                message: "Reaction not found"
            });
        }

        const updatedReaction = await Reaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate('manga_id', ['title', 'cover_photo'])
            .populate('author_id', ['name', 'photo'])
            .populate('company_id', ['name', 'photo']);

        return res.status(200).json({
            success: true,
            reaction: updatedReaction
        });
    } catch (error) {
        next(error);
    }
}

export default update