import Reaction from '../../models/Reaction.js'

const allReactions = async (req, res, next) => {
    try {
        let reactions = await Reaction.find()
            .populate('manga_id', ['title', 'cover_photo'])
            .populate('author_id', ['name', 'photo'])
            .populate('company_id', ['name', 'photo'])

        if (!reactions.length) {
            return res.status(404).json({
                success: false,
                message: 'No reactions found'
            })
        }

        return res.status(200).json({
            success: true,
            reactions: reactions
        })

    } catch (error) {
        next(error)
    }
}

const reactionById = async (req, res, next) => {
    try {
        let reactions = await Reaction.findById(req.body.id)
            .populate('manga_id', ['title', 'cover_photo'])
            .populate('author_id', ['name', 'photo'])
            .populate('company_id', ['name', 'photo']);

        if (!reactions) {
            return res.status(404).json({
                success: false,
                message: 'Reaction not found'
            });
        }

        return res.status(200).json({
            success: true,
            reactions
        });
    } catch (error) {
        next(error);
    }
};

const reactionsById = async (req, res, next) => {
    try {
        let reactions = await Reaction.find({user_id: req.body.id}) // Busca según los criterios proporcionados
        .populate({
            path: 'manga_id', 
            select: ['title', 'cover_photo', 'category_id'],
            populate: {
                path: 'category_id'
            }
        });
            

        if (!reactions.length) {
            return res.status(404).json({
                success: false,
                message: 'No reactions found'
            });
        }

        console.log(reactions);
        

        return res.status(200).json({
            success: true,
            reactions
        });
    } catch (error) {
        next(error);
    }
};


export { allReactions, reactionById, reactionsById }