const express = require('express');
const app = express();
const fs = require('fs');
const users = require('./MOCK_DATA.json');
const port = 8080;

app.use(express.urlencoded({ extended: false}));

app.get('/users', (req, res)=>{
    const html = 
    `<ul>
    ${users.map((user)=> `<li> ${user.first_name} </li>`).join('')}
    </ul>`
    return res.send(html)
})

app.get('/api/users', (req, res)=>{
    return res.json(users);
})

app.route('/api/users/:id').get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    if(!user)return res.status(404).json({error: "user not found"});
    return res.json(user);
}).post((req, res)=>{
    constbody = req.body;
    users.push({...body, id: users.length +1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),
    res.json({status: "success", id: users.length})
    )
})



app.listen(8080);