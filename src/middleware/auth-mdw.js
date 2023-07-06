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

const authMdw = passport.authenticate('jwt', {session: false});

module.exports = { authMdw, SERVER_SECRET };

//se me clavó en validación user-pass, video 5 00:50:19