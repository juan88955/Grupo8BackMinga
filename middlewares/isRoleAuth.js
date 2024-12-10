export const isRoleAuth = (...roles) => [
    (req, res, next) => {
        try {
            if (!req.user?.role) {
                return res.status(401).json({
                    success: false,
                    message: ["Unauthorized - No role found"]
                });
            }

            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: [`Forbidden - Required roles: ${roles.join(', ')}`]
                });
            }

            return next();

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: [error.message]
            });
        }
    }
];

export default isRoleAuth;