module.exports = (req,res,next) => {
    if(req.cookies.andoMateando){
        req.session.userLogin = req.cookies.andoMateando_user
    }

    next()
}