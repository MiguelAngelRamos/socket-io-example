require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server: SocketIOServer } = require('socket.io');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server);

    // Middlewares
    this.middlewares();
    // Socket
    this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    
    this.app.use(express.json());

    // Directorio Publico
    this.app.use(express.static('public'));
  }

  sockets() {
    this.io.on('connection', socketController);
  }

}