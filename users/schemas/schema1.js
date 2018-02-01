

const graphql = require('graphql');
const axios = require('axios');
//create 

const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'users',
  fields:{
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  },
  resolve(parentValue, args){
    return axios.get(`http://localhost:3000/users`)
  }
})