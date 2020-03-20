const net = require('net');
const client = new net.Socket();
const port = 4242;
const host = '92.92.77.7';

client.connect(port, host, function () {
    console.log('Connected');
});

/* EXPRESS */
const express = require('express');
const server = express();

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    next();
});

// on the request to root (localhost:3000/)
server.route('/').get(function (req, res) {
    res.send('<b>My</b> first express http server');
});

// On localhost:3000/welcome
server.route('/humidity').get( function (req, res) {
    try {
        client.write("getHumidity");
    } catch (e) {
        console.log(e);
    }
     client.on('data', function (data) {
        console.log("humidity = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/temperature').get(async function (req, res) {
    try {
        client.write("getTemperature");
    } catch (e) {
        console.log(e)
    }


    await client.on('data', function (data) {
        console.log("temperature = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/pressure').get(async function (req, res) {
    try {
        client.write("getPressure");
    } catch (e) {
        console.log(e);
    }

    await client.on('data', function (data) {
        console.log("PRESSION = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/magnet').get(function (req, res) {
    try {
        client.write("isMagnet");
    } catch (e) {
        console.log(e);
    }
    client.on('data', function (data) {
        console.log("magnet = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/mouvement').get(function (req, res) {
    try {
        client.write("isMoving");
    } catch (e) {
        console.log(e);
    }
    client.on('data', function (data) {
        console.log("movement = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/horizontal').get(function (req, res) {
    try {
        client.write("isHorizontal");
    } catch (e) {
        console.log(e);
    }
    client.on('data', function (data) {
        console.log("horizontal = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/ledon').get(async function (req, res) {
    try {
        client.write("ledOn");
    } catch (e) {
        console.log(e);
    }
    client.on('data', function (data) {
        console.log("ledOn = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

server.route('/ledoff').get(function (req, res) {
    try {
        client.write("ledOff");
    } catch (e) {
        console.log(e);
    }
    client.on('data', function (data) {
        console.log("ledOff = ", data);
        try {
            res.send(data);
        } catch (e) {
            console.log(e);
        }
    });
});

// Change the 404 message the middleware
server.use(function (req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
server.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
