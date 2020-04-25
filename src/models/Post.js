// const { database } = require("../data/mongoose.js");

const posts = [
    {
        id: 3,
        title: "First post",
        content: "One of the best first posts",
        author: 1,
        comments: [1]
    },
    {
        id: 4,
        title: "Awesome post",
        content: "Awesome posts",
        author: 1,
        comments: [2]
    },
    {
        id: 5,
        title: "Awesome post",
        content: "Awesome posts",
        author: 2,
        comments: []
    },
];
  
class Post {
  static all() {
    return posts;
  }

  static findById( id ) {
      return  posts.find( post => post.id  == id )
  }

  static findByAuthor( authorId ) {
      return posts.filter( post => post.author == authorId )
  }

  static findByCommentId( commentId ) {
    return posts.filter( post => post.comments.includes(id) )
  }

}

module.exports = {
  Post,
};