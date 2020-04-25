const users = [
    {
        id: 1,
        firstName: 'Daniel',
        lastName: 'Mocan',
        posts: [3, 4],
        comments: [],
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        posts: [5],
        comments: [1, 2],
    },
];
  
class User {
  static all() {
    return users;
  }

  static findById( id ) {
      return users.find( user => user.id  == id )
  }

  static findByCommentId( id ) {
      return users.find( user => user.comments.includes(id))
  }
}

module.exports = {
  User,
};