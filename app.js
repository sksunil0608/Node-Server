const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database')
const errorController = require('./controllers/error');
const cors = require('cors')
const app = express();
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views');
// Parsing the recieved object
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');

app.use((req,res,next)=>{
    User.findByPk(1).then(user=>{
        req.user = user;
        next()
    }).catch(err=>{
        console.log(err)
    })
})

// app.use(userRoutes)

app.use("/admin", adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'})
User.hasMany(Product);
User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart, { through: CartItem });
sequelize.
sync()
// sync({force:true})
.then((result)=>{
    // console.log(result)
    return User.findByPk(1);
})
.then(user=>{
    if(!user){
        return User.create({name:"Sunil",email:"sk@gmail",phone:"98765432"})
    }
    return user
}).then(user=>{

    return user.createCart();
    
}).then(cart=>{
    app.listen(3000)
})
.catch(err=>{console.log(err)})

