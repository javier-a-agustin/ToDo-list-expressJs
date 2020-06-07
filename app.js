const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res){
    var today = new Date();
    var options = { weekday: "long", month: 'long', year: "numeric"};
    var day = today.toLocaleDateString(options);
    res.render('list', {day: day, items: items});
});


app.post("/", function(req, res) {
    var item = req.body.newItem;
    
    if (req.body.Delete === "Delete"){
        items = [];
    };

    if (item){
        items.push(item);
    };
    
    res.redirect("/");    

});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});