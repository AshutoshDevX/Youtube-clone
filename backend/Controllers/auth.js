export const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(403).json({
            msg: "Forbidden"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        return res.status(403).json({
            msg: "Forbidden"
        })
    }
}