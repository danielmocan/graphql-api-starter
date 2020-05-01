const { User } = require( "../controllers/User");

const userResolvers = {
    Query: {
        getUsers: () => User.all(),
        getUser: (parent, args, context, info ) => {
            return User.findById( args.id )
        }
    },
    Mutation: {
        addUser(parent, args, context, info ){
            return User.createUser(args.user)
        },
        login( parent, args, context, info) {
            const user = User.login( args.loginData );
            if( user.error ) {
                return user.error
            }
            return user;
        }
    }
};

module.exports = {
    userResolvers
}