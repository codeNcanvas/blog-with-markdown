import jwt from 'jsonwebtoken';
import { promisify } from 'node:util';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
  try {

    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not logged in. Please log in to get access.',
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token no longer exists.',
      });
    }

    // (Optional) 6. Check if user changed password after the token was issued
    // This logic would be added in the userModel if you have a `passwordChangedAt` field.
    // For this project, this check is not required but is good to know about.


    req.user = currentUser;
    next();
  } catch (error) {
    console.error('AUTH MIDDLEWARE ERROR:', error);
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid token or session expired. Please log in again.',
    });
  }
};