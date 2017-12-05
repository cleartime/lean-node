const express = require('express');

const expressGraphql = require('express-graphql');


const app = express();


app.use('/graphql',expressGraphql(()=>{
	schema,
	graphql: true,
	pretty: true
}))

app.listen(4000,()=>{
    console.log('listen in 4000:')
})
