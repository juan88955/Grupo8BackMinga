import User from '../../models/User.js'

const update = async (req, res, next) => {
    try {
        let updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.status(200).json({
            success: true,
            user: updatedUser
        })
    } catch (error) {
        next(error)
    }
}

const updateRole = async (req, res,next) => {
    try {
        const { _id, role } = req.body;
       
         if (![1, 2].includes(role)) {
            return res.status(400).json({ message: "Role must be 1 (author) or 2 (company)" });
        }
 
        const user = await User.findByIdAndUpdate(
            _id,
            { role },
            { new: true }
        );
 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
 
        res.json({ success: true, user });
 
    } catch (error) {
        next(error)
    }
 };

export { update, updateRole }