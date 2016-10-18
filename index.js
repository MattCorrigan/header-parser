var express = require('express');
var app = express();

app.all("*", function(req, res){
    
    results = {};
    results["ipaddress"] = req.headers['x-forwarded-for'];
    results["language"] = req.headers["accept-language"];
    results["software"] = req.headers["user-agent"].split("(")[1].split(")")[0];
    
    res.end(JSON.stringify(results));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port 8080');
});