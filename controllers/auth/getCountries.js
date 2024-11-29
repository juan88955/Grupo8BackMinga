const countries = [
    "Argentina", "Brasil", "Chile", "Colombia",
    "España", "México", "Perú", "Uruguay"
];

export default (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            countries
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error when obtaining countries'
        });
    }
};
