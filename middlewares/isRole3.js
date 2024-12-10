const isRole3 = () => [
    (req, res, next) => {
        try {
            if (!req.user?.role) {
                return res.status(401).json({
                    success: false,
                    message: ["Unauthorized - No role found"]
                });
            }

            if (req.user.role !== 3) {
                return res.status(403).json({
                    success: false,
                    message: ["Forbidden - Role 3 required"]
                });
            }

            return next();

        } catch (error) {
            next(error);
        }
    }
];

export default isRole3;