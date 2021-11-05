require("dotenv").config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require("method-override");
let session = require("express-session");

//Requiriendo rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var adminRouter = require("./routes/admin");
<<<<<<< HEAD
var cartRouter = require("./routes/cart");

=======
var adminApi = require('./routes/api/products')
>>>>>>> 8449616d1bd4657fe008e0b3c10ad9b0b7f980dd

//Requiriendo middlewares
let loginUserCheck = require("./middlewares/loginUserCheck");

//Guardando funcionalidad de express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session({secret:"Home experience", resave:false, saveUninitialized: true}));
app.use(loginUserCheck);

//Indicando donde se encuentra la carpeta public
app.use(express.static(path.join(__dirname, '..', 'public')));

//Rutas
app.use('/', indexRouter);
app.use('/usuarios', usersRouter);
app.use('/productos', productsRouter);
app.use("/admin", adminRouter);
app.use("/cart", cartRouter);
app.use('/api/productos', adminApi);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
