const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello SecDevOps!');
});

app.listen(3000, () => console.log('Listening on port 3000'));

// Test - fake secret for lab purposes
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"; 
