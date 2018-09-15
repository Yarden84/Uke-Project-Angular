const express =  require('express');
    path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/jewkulele'));

app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/dist/jewkulele/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('Server started');
});

// const express =  require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(__dirname + '/dist'));

// app.listen(process.env.PORT || 8080);

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });