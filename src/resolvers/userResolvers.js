const { User } = require( "../controllers/User");

const userResolvers = {
    Query: {
        getUsers: () => User.all(),
        getUser: (parent, args, context, info ) => {
            return User.findById( args.id )
        }
    },
    Mutation: {
        async addUser(parent, args, context, info ){
            return await User.createUser(args.user)
        },
        async login( parent, args, context, info) {
            const user = await User.login( args.loginData );
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