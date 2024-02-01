// Referencias con JavaScript
const statusOnline = document.querySelector('#statusOnline');
const statusOffline = document.querySelector('#statusOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
  console.log('Conectado...');
  statusOffline.style.display = 'none';
  statusOnline.style.display = 'block';
});

socket.on('disconnect', () => {
  console.log('Desconectado...');
  statusOffline.style.display = 'block';
  statusOnline.style.display = 'none';
});

// Enviar mensaje 
socket.on('enviar-mensaje', (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value;

  const payload = {
    id: '453411',
    mensaje: mensaje,
    fecha: new Date().getTime()
  }

  socket.emit('enviar-mensaje', payload, (id) => {
    console.log('Desde el Servidor recibo: ', id);
  });

});

