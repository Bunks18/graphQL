
const graphql = require('graphql');
const axios = require('axios');

//bring the graphql objects

const {
  GraphQLObjectType
} = graphql

const UserType = new GraphQLObjectType ({
  name: 'users',
  fields: {

  },
  resolve(){
    
  }
})




//something about the root query 