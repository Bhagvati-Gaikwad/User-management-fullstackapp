const jwt =require("jsonwebtoken");

exports.protect =(req, res, next) => {
const token = req.cookies.token;
if (!token)return res.status(401).json({message:"Not authorized" });

const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
next();
};

exports.adminOnly =(req, res, next) => {
if (req.user.role !=="admin") {
return res.status(403).json({message:"Admins only" });
  }
next();
};

