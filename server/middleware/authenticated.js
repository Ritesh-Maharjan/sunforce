
const authenticated = (req,res,next) => {
    if(req.session.authenticated && req.session.user?.username === 'admin'){
        next()
    }
    else{
        const err = new Error("Please login");
        err.code = 401
        next(err)
    }
}

module.exports = authenticated