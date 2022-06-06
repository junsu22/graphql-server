# Apollo & playground server

mkdir graphql-server

cd graphql-server 

npm init-y 


npm i apollo-server


npm i nodemon -D


vsc - terminal )   npm i graphql

+) index.js 파일 만들기

https://github.com/apollographql/apollo-server 참조



package.json > script > 
(-)test
<code>"dev" : "nodemon index.js"</code>


npm run dev



index.js ->const server = new Apolo......
ltypeDefs,resolvers, (추가 )
<code>playground : true,</code>




http://localhost:4000/


const {
<code>
const {readFileSync} = require("fs");
 </code>
//File Sync  추가함.


typeDefs = gql`
type query {
"blabla"
 , 

1.쿼리 추가하기
ex. 
<code>
books: [Book]
}
</code></br>
2.정의 하기
ex.
<code>
type Book {
	bookId : Int 
	title : String
	message : String
	author : String
	url : String
}
`;
</code><br>
3. 쿼리수행
<code>
const resolvers = {
	Query: {
	hello : () => "world",
	books: () => {    //...
</code>
	
 
