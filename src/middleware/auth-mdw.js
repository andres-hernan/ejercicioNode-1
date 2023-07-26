const SERVER_SECRET = 'secretoMasSecretoDelMundoMundial';

const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: SERVER_SECRET,
        },
        (jwtPayload, done) => {
            const user = jwtPayload;
            return done(null, user);
        }
    )
);

const authMdw = passport.authenticate('jwt', { session: false });

const userIsAdminMdw = (req, res, next) => {
    return passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if(err){
            console.err(err);
            return next(err);
        }

        if(user.role === 'Admin'){
            req.user = user;
            return next();
        }

        res.status(401).json({error: 'User is not Admin'});
    })(req, res, next);
};

module.exports = { authMdw, SERVER_SECRET, userIsAdminMdw };

