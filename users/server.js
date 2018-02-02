// bringing in express
const express = require('express')

//bring in glue layer
const expressGraphQL = require('express-graphql');

const schema = require('./schemas/schema1');

//using express to create a server instance
const app = express();

app.use('/graphQL', expressGraphQL({
  schema,
  graphiql: true
}))


// takes two arguements, the port and the callback function
app.listen(4000, () =>{
  console.log('listening betch');
});