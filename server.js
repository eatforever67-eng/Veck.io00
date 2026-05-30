import express from 'express';
import { createServer } from 'node:http';
import { uvPath } from '@sonic013/ultraviolet';
import { join } from 'node:path';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 8080;

// Serve statutory static files (your frontend dashboard)
const __dirname = process.cwd();
app.use(express.static(join(__dirname, 'public')));

// Bind the Ultraviolet proxy pathing routes
app.use('/uv/', express.static(uvPath));

// Handle proxy rewrite registration rules
app.get('/launch', (req, res) => {
    // Target the specific unblocked web endpoint for Roblox
    const targetUrl = "https://now.gg"; 
    
    // Encodes the destination string into the proxy registry format
    const encodedTarget = Buffer.from(targetUrl).toString('base64');
    res.redirect(`/uv/service/${encodedTarget}`);
});

server.listen(PORT, () => {
    console.log(`Proxy server actively running on port ${PORT}`);
});

