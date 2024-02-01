const socketController = (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on('disconnect', (reason) => {
    console.log(`Cliente desconectado: ${socket.id}, razón: ${reason}`);
  });

  socket.on('enviar-mensaje', (payload, callback) =>{
    const id = 737174;
    callback(id);

    socket.broadcast.emit('enviar-mensaje', payload);
  });
}


module.exports = {
  socketController
}