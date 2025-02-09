import jwt from 'jsonwebtoken'; 

// User authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id; 
            
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default authUser; 