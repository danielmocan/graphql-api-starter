const { User } = require( "../models/User");

const userResolvers = {
    Query: {
        users: () => User.all(),
        user: (parent, args, context, info ) => {
            console.log("user Id ", args );
            return User.findById( args.id )
        }
    }
};

module.exports = {
    userResolvers
}