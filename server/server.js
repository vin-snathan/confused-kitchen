const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (request, response) => {
	response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
