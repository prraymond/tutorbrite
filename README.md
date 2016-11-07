# DampSun 660 project

Runing the code. You need to point it to your database and also run `gulp`. Do that
by passing in an environment variable.

```
DATABASE_URL="mysql://cs2228@localhost/tutorbrite" gulp
```

Of course, you will need to have installed mysql if you're running that in a c9 environment,
and also have created the tutorbrite database. And, clearly, your username will likely not
be `cs228`! Change as appropriate. Follow the documentation [here](https://community.c9.io/t/setting-up-mysql/1718).

To start mysql on Cloud9, you'll want to run the following command

```
mysql-ctl start
```

You'll want to run that before you start your application with gulp, otherwise
you will get an error about "connection refused" or something similiar.

Then, you can initialize the database and add an event by visiting
[http://tutorbrite-cs2228.c9users.io/events/init](http://tutorbrite-cs2228.c9users.io/events/init).

## What we're using

This application relies on a number of open source projects.
Obviously, it is a [node.js](http://nodejs.org/) application.
We are using the following components, which are built for node
applications and written by people that have made them open 
source.

* [express.js](http://expressjs.com/): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [nunjucks](http://mozilla.github.io/nunjucks/): A templating language for JavaScript. This allows us to say there is a certain default page and every other page should like just like it, maybe changing just small parts.
* [morgan](https://github.com/expressjs/morgan): HTTP request logger middleware for node.js, written by the people who write Express. This allows us to print pretty logging statements while the application is handling requests.
* [validator](https://github.com/chriso/validator.js): A library of string validators and sanitizers. This helps us ensure that parameters sent to our application by users are valid.
* [body-parser](https://github.com/expressjs/body-parser): Node.js body parsing middleware by the people who write Express.
