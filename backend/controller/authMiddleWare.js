const jwt = require("jsonwebtoken");
const secretKey="3493eb041692ecfe5ca21a854a5641a6d32c4bf0849141552ef62920664e5e4b";

const verifyToken = (req, res, next) => {
  const token = req.cookies.auth_token; // Assuming token is stored in 'token' cookie
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Token missing. Please log in." });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // Replace with your secret
    req.user = decoded; // Attach decoded data to request
    next();
  } catch (err) {
    return res.redirect("/login").json({ message: "Invalid token. Please log in again." });
  }
};

module.exports = verifyToken;
