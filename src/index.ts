import { createTunnelServer } from './main';

const port = 3000;

// Create the tunnel server
const { server } = createTunnelServer();

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`WebSocket endpoint available at ws://localhost:${port}/accept`);
});
