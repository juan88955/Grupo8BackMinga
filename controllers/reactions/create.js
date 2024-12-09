import Reaction from '../../models/Reaction.js';

const create = async (req, res) => {
    try {
        const { manga_id, reaccion } = req.body;
        const userId = req.user.id;

        const existingReaction = await Reaction.findOne({
            manga_id,
            user_id: userId
        });

        if (existingReaction && existingReaction.reaccion === reaccion) {
            await Reaction.findByIdAndDelete(existingReaction._id);
            return res.status(200).json({
                success: true,
                message: "Reaction removed",
                reaction: null
            });
        }

        if (existingReaction) {
            existingReaction.reaccion = reaccion;
            await existingReaction.save();
            return res.status(200).json({
                success: true,
                reaction: existingReaction
            });
        }

        const newReaction = await Reaction.create({
            manga_id,
            reaccion,
            user_id: userId
        });

        return res.status(201).json({
            success: true,
            reaction: newReaction
        });
    } catch (error) {
        next(error)
    }
};

export default create;