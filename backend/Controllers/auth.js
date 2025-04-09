import "dotenv/config"
import jwt from 'jsonwebtoken'
export const auth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(403).json({
            msg: "you don't have permission to access this resource"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userId = decoded.userId;
        next();
    }
    catch (err) {
        console.log(err)
        return res.status(403).json({

            msg: "you don't have permission to access this resource"
        })
    }
}