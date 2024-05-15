// AUTH , IS STUDENT , IS INSTRUCTOR , IS ADMIN

const jwt = require("jsonwebtoken");
require('dotenv').config();

// ================ AUTH ================
exports.auth = (req, res, next) => {
    try {
        const token = req.body?.token || req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is Missing'
            });
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }
        catch (error) {
            console.log('Error while decoding token');
            console.log(error);
            return res.status(401).json({
                success: false,
                error: error.message,
                message: 'Error while decoding token'
            })
        }
        next();
    }
    catch (error) {
        console.log('Error while token validating');
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error while token validating'
        })
    }
}

// ================ IS STUDENT ================
exports.isStudent = (req, res, next) => {
    try {
        if (req.user?.accountType !== 'Student') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for students'
            })
        }
        next();
    }
    catch (error) {
        console.log('Error while checking user validity with student accountType');
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while checking user validity with student accountType'
        })
    }
}

// ================ IS INSTRUCTOR ================
exports.isInstructor = (req, res, next) => {
    try {
        if (req.user?.accountType !== 'Instructor') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for Instructors'
            })
        }
        next();
    }
    catch (error) {
        console.log('Error while checking user validity with Instructor accountType');
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while checking user validity with Instructor accountType'
        })
    }
}

// ================ IS ADMIN ================
exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.accountType !== 'Admin') {
            return res.status(401).json({
                success: false,
                message: 'This Page is protected only for Admins'
            })
        }
        next();
    }
    catch (error) {
        console.log('Error while checking user validity with Admin accountType');
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while checking user validity with Admin accountType'
        })
    }
}
