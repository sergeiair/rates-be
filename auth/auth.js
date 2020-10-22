import UsersController from "../modules/users/controller";
import UsersDataService from "../modules/users/data.service";

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const usersDataService = new UsersDataService();

passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser(async (email, done) => {
  try {
    const user = await usersDataService.getUserUnsafe(email);
    done(null, user);
  } catch(err) {
    done(err);
  }
});

passport.use(new LocalStrategy((email, pw, done) => {
  usersDataService.getUser({pw, email}).then((res) => {
    if ((res.data || {}).email) {
      done(null, res.data);
    } else {
      done(null, false);
    }
  }).catch((err) => { done(err) });
}));
