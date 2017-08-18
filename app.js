var express = require('express');
var app = express();

app.get('/myproperties', function (req, res) {
    res.json([
        {id: 1, address: 'oxford street'},
        {id: 2, address: 'sussex street'},
        {id: 3, address: 'whitheart lane'},
        {id: 4, address: 'bussby lane'},
        {id: 5, address: 'coco channel street'}]
    );
});

app.listen(3000);
