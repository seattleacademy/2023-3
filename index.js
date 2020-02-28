const express = require('express')
const app = express()
const port = 1500
const attendance = [];


app.get('/', (req, res) => {
	let person = req.query.name;
	attendance.push(person);
	console.log(attendance)
	res.send(attendance)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))