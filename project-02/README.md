# Project 02 - Building a Back-End Application using Apollo Server & GraphQL

A Udemy training **[The Modern GraphQL Bootcamp (with Node.js and Apollo)](https://www.udemy.com/course/graphql-bootcamp/)** how to use GraphQL with Node.js/TypeScript. The main goal with this course is to learn how to build a GraphQL applications using Node.js + Prisma + Apollo.

## 🚀 Resources Used

- ✅ **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-14034-gllemos)**
- ✅ **[Node.js](https://nodejs.org/en/)**
- ✅ **[Apollo Server](https://www.apollographql.com/docs/apollo-server/)**
- ✅ **[Prisma](https://www.prisma.io/)**

## 🖥️ How to execute the application?

To run the application first you need to install all the dependencies in: (in the root of the application)

```bash
> npm install
```

After to install all the dependencies, now you need to go to the main root, where is the `package.json`, and then execute the command:

```bash
> npm run dev
```

Now, open a browser and go to the `localhost:4000/graphql`. Will open a GraphQL Playground.
To test if it is working use this query as a test: (there's another queries in the `rest.http`)

```gql
query GetAllPosts {
  posts {
    id
    title
    author {
      name
    }
  }
}
```

If the return is as below, it is because it's working correctly:

```json
{
  "data": {
    "posts": [
      {
        "id": "1",
        "title": "Learn JavaScript",
        "author": {
          "name": "Glaucia Lemos"
        }
      },
      {
        "id": "2",
        "title": "Learn TypeScript",
        "author": {
          "name": "Prince"
        }
      },
      {
        "id": "3",
        "title": "Learn Node.Js",
        "author": {
          "name": "Jurema Lemos"
        }
      }
    ]
  }
}
```


## ❓ I have Issues... How should I do!

If you have any doubts about some project developed, feel free to open an **[ISSUE HERE](https://github.com/glaucia86/graphql-ts-studies/issues)**. As soon as possible, I will be answering any questions you may have!