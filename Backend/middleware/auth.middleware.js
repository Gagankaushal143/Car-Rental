import jwt, { decode } from "jsonwebtoken";

export const protect = (req, res, next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            success : false,
            message : "Authorization header missing"
        });
    }

    if(!authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            success : false,
            message : "Invalid authorization format",
        });
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next()
    }
    catch(error){
        return res.status(401).json({
            success : false,
            message : "Invalid or Expired token"
        })
    }
}

