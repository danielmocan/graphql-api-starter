const comments = [
    {
        id: 1,
        content: "This is the best Post",
        author: 2,
        post: 3,
    },
    {
        id: 2,
        content: "This is the best Post",
        author: 2,
        post: 4,
    },
];
  
class Comment {
  static all() {
    return comments;
  }

  static findCommentsByPostId( postId ) {
      return comments.filter( comment => comment.post == postId )
  }

  static findCommentsByAuthorId( authorId ) {
    return comments.filter( comment => comment.author == authorId )
  }

  static findById( commentId ) {
      return comments.find( comment => comment.id == commentId )
  }
}

module.exports = {
  Comment,
};