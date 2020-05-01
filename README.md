# GraphQL Starter (WIP)

### GraphQL Server Starter using Apollo Server.

* This is **Work In Progress**, the are some errors to be fixed

The starter simulates a backend server for a blog. You have authors, posts and comments all tied together, this allows us to go in depth with our GraphQL Queries.

### Prerequisites:

You will need MongoDB working on port `27017` (default port, if you have MongoDB installed globably just run `mongod`)

And install the project dependecies

```javascript
npm install
```
Start the project
```javascript
npm start
```
You can check the GraphQL Playground at `http://localhost:4000`

Your database will be empty so lets create some records using the GraphQL Interface:

### Adding a user

```javascript
mutation {
  addUser(user: {firstName: "Daniel", lastName:"Mocan", email:"email@email.com", password:"SomePassword"}) {
    id
    firstName
    lastName
  }
}
```
### Login
Only user that are logged in are allowed to add post or comments

```javascript
mutation {
  login(loginData:{email:"email@email.com", password: "SomePassword"}) {
    user{
      id
      firstName
      lastName
    }
    token
  }
}
```
You should receive the user information and the token. To send the token to the graphql api you need to send it on the headers. At the bottom of the left corner you two tabs `Query Variables` and `HTTP Headers`.
In the `Http Headers` tab add the authorization header like this:

```javascript
{
  "authorization": "Add here the token that you received at logged in (previous step)"
}
```
Now that we have the token and we send it back to the graphql api, we can create a post. As a side note you can check `server.js` we check if the token exists, check and get the loggedin user's details.

### Adding a post
```javascript
mutation {
  addPost(post:{ title: "Our first Post", content: "Hello World! This is the content of the post"}) {
    id
    title
    content
  }
}
```
### Query of Posts
We can now query for the posts.

```javascript
query {
  getPosts {
    id
    title
  }
}
```

And now to see the realy power and beauty of *GraphQL* in action, we can do a nested query.

```javascript
query {
  getPosts {
    id
    title
    author {
      id
      firstName
      lastName
      posts {
        title,
        content,
        author {
          firstName,
          lastName,
          id
        }
        comments {
          content
        }
      }
    }
  }
}
```


#### To Do List
- [ ] Add validation for fields
- [ ] Add Error handling
- [ ] Document all the way all this is connected
- [ ] Maybe move some of the filed resolvers to a general resolver
