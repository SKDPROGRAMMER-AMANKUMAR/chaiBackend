import jwt from 'jsonwebtoken';

// Middleware to verify the access token
export const verifyAccessToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from 'Bearer <token>'

    if (!token) {
        return res.status(401).json({ message: 'Access Token Missing' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or Expired Token' });
        }

        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Move to the next middleware or route handler
    });
};

// Middleware to verify the refresh token
export const verifyRefreshToken = (req, res, next) => {
    const { refreshToken } = req.body; // Get the refresh token from the request body

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh Token Missing' });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or Expired Refresh Token' });
        }

        req.user = decoded; // Attach the decoded user data to the request object
        next();
    });
};
