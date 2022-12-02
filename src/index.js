const express = require('express');
const morgan = require('morgan');//ver las peticiones
const app = express();//servidor
const path = require('path');//Traba con directorios identificando el SO // \\
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const session = require('express-session');


//Configuracion Servidor
app.set('port', process.env.PORT || 3000)//asignar puerto, si lo da el So que lo tome, sino el 3000
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);//usara el motor ejs para archivos html
app.set('view engine', 'ejs');//motor de plantillas, permite ejecutar javascript y traducirlo a html

//middlewares //Funciones que se ejecutan antes que lleguen a las rutas
app.use(express.json());//Acceder a la informacion de jason
app.use(morgan('dev'));//muestra los mensajes en consola de las cargas y peticiones
/* app.use(myConnection(mysql, {
     host: 'bpui8m1t3pulemi4dlfv-mysql.services.clever-cloud.com',  // host:'localhost',
     user: 'u7xoomeqcazzaq57',  // user: 'root',
     password: 'nciIFmnLngqjuKcoB5LW', // password: 'Soporte1702861',
     port: 3306,
     database: 'bpui8m1t3pulemi4dlfv'   //database: 'encuestaiso'
}, 'single')) */

app.use(myConnection(mysql, {
     host: 'containers-us-west-100.railway.app',  // host:'localhost',
     user: 'root',  // user: 'root',
     password: 'SWGneeBDeiUke86E6mM9', // password: 'Soporte1702861',
     port: 5698,
     database: 'railway'   //database: 'encuestaiso'
}))

app.use(session({
     secret: 'keyboard cat',
     resave: false,
     saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }));//para que el servidor entienda los datos del navegador al hacer un guardado de formulario

//routes o urls
app.use(require('./routes/rutas.js'));//usar las rutas


//Escuchando el servidor
app.listen(app.get('port'), () => {
     console.log('server', app.get('port'));
});

//file statics
app.use(express.static(path.join(__dirname, 'public')));//para archivos como imagenes,css,javascript


/* 
const Valeria = {
     cabeza: {
          cerebro: 'Estar todo el dia aqui en su mente para que me extrañe y distrerla de todo lo malo 💢',
          nariz: 'tratar que siempre este a la mano su nafazolina 😤',
          mejilla: 'acariciarla y acostumbrarla a apretarlas ocasionalmente',
          labios: 'Sólo los puede usar para comer y besarme a mí 😡'
     },
     cuerpo:{
          cuello: 'acostumbrarlo a mis labios y mi mano 👀',
          corazon: 'cuidarlo y hacerle entender que me pertenece',
          pecho: 'mantenterse siempre tapados, y sólo yo puedo hacer lo que quiera 👀😎',
          abdomen: 'tambien es mio y lo puede apretar todo lo que quiera 😬',
          '🍑': '👅👅👅💪💪🍆🍆',
          piernas: 'simplemente son mias ya, y puedo morder y y y y  todo lo que quiera'
     }
}

app.use(setConfiguration(Valeria)).static(path.join(__dirname, 'public'))








 */