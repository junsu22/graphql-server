const { ApolloServer, gql } = require('apollo-server');
const {readFileSync} = require('fs');
const { join } = require('path');
// The GraphQL schema
// typeDefs :schema 정의
const typeDefs = gql`       
  type Query {
    "A simple type for getting started!"
    hello: String,
    books : [Book]    
    book(bookId : Int): Book   
  }
  type Mutation {
    addBook
  }
  
  type Book{
    bookId:Int
    title:String
    message:String
    author: String
    url: String 
  }`;




// schema 에 해당하는 구현 조회,수정,삭제 
const resolvers = {
  Query: {
    hello: () => 'world',
    books:() => {
      return JSON.parse(readFileSync(join(__dirname, 'books.json')).toString())
    },
    book: (parent, args, context, info) => {
      const books = JSON.parse(readFileSync(join(__dirname, 'books.json')).toString())
      return books.find(book => book.bookId === args.bookId);
        
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});