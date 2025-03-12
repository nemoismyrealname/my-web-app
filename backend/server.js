const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/notify', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);
    
    
    res.json({ status: 'success', message: `Notification received: ${message}` });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
