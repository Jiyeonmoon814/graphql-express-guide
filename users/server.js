// A web page requests, Express received the request
// If the request is asking for GraphQL
// Y => Goes to GraphQl and response
// N => just responses
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Listening");
});
