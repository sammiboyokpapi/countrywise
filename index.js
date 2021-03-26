const express = require('express')
const path = require('path')


const app = express()
const session = require('express-session');

const fileUpload = require('express-fileupload');


//var child = require('./child');

//child.f1();
//var datum = new Date('05/10/2019').toString();
//ar dateFormat = require('dateformat');



app.set('/views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.use(fileUpload());
app.use(express.urlencoded({ extended: true }))
//app.use('/static', express.static('public'))

app.use(express.static(path.join(__dirname, 'views')));

app.use(express.static(__dirname + 'node_modules/@fortawesome/fontawesome-free/fontawesome-free'));

app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/Script'));

// @TODO add auth middleware
// @TODO add registration page
// @TODO add logout route


//define routes here

app.use('/main',require('./routes/main'))

app.use('/upload',require('./routes/upload'))

app.use('/logout',require('./routes/logout'))

app.use('/search', require('./routes/search'))

app.use('/merchant', require('./routes/merchant'))

app.use('/terminal', require('./routes/terminal'))

app.use('/register', require('./routes/register'))

app.use('/partner', require('./routes/partner'))

app.use('/ajo_thrift', require('./routes/ajo_thrift'))

app.use('/kycuser', require('./routes/kycuser'))

app.use('/file-upload', require('./routes/fileupload'))

app.use('/file-download', require('./routes/filedownload')) 

app.use('/logs',require('./routes/logs'))

app.use('/', require('./routes/index'))





const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))
