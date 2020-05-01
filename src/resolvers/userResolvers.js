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
            return user;
        }
    }
};

module.exports = {
    userResolvers
}