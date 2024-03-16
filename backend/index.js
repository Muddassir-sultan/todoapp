const express = require('express';
const { createTodo } = require('./types');
const app= express();

app.use(express.json());

app.post("/todos",async function(req,res){
    const createpayload=req.body;
    const parsepayload=createTodo.safeParse(createpayload);
    if(!parsepayload.success){
        res.status(411).json({
            msg:"you sent the wrong input",
        })
        return;
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    req.json({
        msg:"todo created"
    })

})


app.get("/todos",function(req,res){
    const todos=todo.find({});
    console.log(todos);
    res.json({
        todos
    })

})
app.put("/completed",async function(req,res){
    const updatepayload = req.body;
    const parsepayload = updateTodo.safeParse(updatepayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "you sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000);