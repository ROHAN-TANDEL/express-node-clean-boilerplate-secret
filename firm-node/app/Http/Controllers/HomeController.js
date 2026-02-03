exports.index = (req, res) => {
    res.json({
        message: 'Login successful',
        data: req.body
    });
};