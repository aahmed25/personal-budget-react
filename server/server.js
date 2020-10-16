const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.use('/', express.static('public'));

const budget = require ('./budget.json');
// {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 70
//     },
//     {
//         title: 'Rent',
//         budget: 800
//     },
//     {
//         title: 'Grocery',
//         budget: 110
//     },
//     {
//         title: 'Phone',
//         budget: 80
//     },
//     {
//         title: 'Insurance',
//         budget: 140
//     },
//     {
//         title: 'Car',
//         budget: 300
//     },
//     {
//         title: 'Bills',
//         budget: 400
//     },
// ]
// };


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:4000');
});