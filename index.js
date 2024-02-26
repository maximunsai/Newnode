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
    const id = Number(req.params.id)
})


app.listen(8080);