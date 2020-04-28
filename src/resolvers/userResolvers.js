const { User } = require( "../controllers/User");

const userResolvers = {
    Query: {
        users: () => User.all(),
        user: (parent, args, context, info ) => {
            return User.findById( args.id )
        }
    },
    Mutation: {
        user(parent, args, context, info ){
    
            return User.createUser({
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                password: args.password,
            })
        },
        login( parent, args, context, info) {
            const user = User.login( args );
            if( user.error ) {
                return user.error
            }
            // context.user = user;
            return user;
        }
    }
};

module.exports = {
    userResolvers
}