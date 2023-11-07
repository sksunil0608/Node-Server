const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controller/error.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus.js');
const successRoutes = require('./routes/success.js');


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
app.use(successRoutes)
app.use(errorController.pageNotFound);

app.listen(3000);
