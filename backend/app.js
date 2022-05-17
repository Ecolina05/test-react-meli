const express = require('express');
const cors = require('cors');
const routes = require('./routes/product.route');

const PORT = 3001;
const app = express();

app.use('/api/items', routes);
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));