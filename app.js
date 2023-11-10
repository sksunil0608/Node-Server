const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const errorController = require('./controllers/error');
const cors = require('cors')
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views');
// Parsing the recieved object
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');


app.use(userRoutes)
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
sequelize.sync().then((result)=>{
    // console.log(result)
    app.listen(3000);
}).catch(err=>{console.log(err)})

