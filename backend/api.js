const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const PortifolioRouter = require('./router/PortifolioRouter')
const app = express();
const port = 3000;

const router = express.Router();

app.use(cors());

app.use(bodyparser.urlencoded({extend: true}));
app.use(bodyparser.json());

router.get("/",(req, res)=> res.json({
    mensagem: 'API Online'
}));

app.use('/', router);
app.use('/portifolio', PortifolioRouter);
app.listen(port);
console.log('Api online na porta: ', port);



