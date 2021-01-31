   //basic
const express = require('express');
const app= express();
const port =3000
var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
//set views
app.set('view engine','ejs')
var campgrounds = [
    {name:"italian", img:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"newyork",img:"https://images.unsplash.com/photo-1610734606118-5c76c8ba1dab?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"pakistan",img:"https://images.unsplash.com/photo-1556942154-006c061d4561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"islamabad",img:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"thailand",img:"https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"italian", img:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"newyork",img:"https://images.unsplash.com/photo-1610734606118-5c76c8ba1dab?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"pakistan",img:"https://images.unsplash.com/photo-1556942154-006c061d4561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"islamabad",img:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"thailand",img:"https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"italian", img:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"newyork",img:"https://images.unsplash.com/photo-1610734606118-5c76c8ba1dab?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"pakistan",img:"https://images.unsplash.com/photo-1556942154-006c061d4561?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"islamabad",img:"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"thailand",img:"https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhbXBncm91bmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},    
    {name:"chaines",img:"https://images.unsplash.com/photo-1533873984035-25970ab07461?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGdyb3VuZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
]

// request
app.get("",function(req,res){
    res.render('landing')
});
app.get("/campgrounds",function(req,res){
    
     res.render("campgrounds",{campgrounds:campgrounds});
});
  
app.post("/campgrounds",function(req,res){
    // get data from form
  var name = req.body.name;
   var img= req.body.img;
   var newCampground={ name:name, 
                        img:img}
      campgrounds.push(newCampground)
      // redirect to campground page 
      res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
     res.render("new.ejs");
    });




app.listen(port, () => console.log(`Server running on port "${port}"`))