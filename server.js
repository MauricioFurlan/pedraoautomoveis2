import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const jsonFile = JSON.parse(await readFile('./db.json', 'utf8'));
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/veiculos',  function (req, res) {
  res.send(jsonFile);
})


function sendMail(data) {
   const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // < recebe... port == 465 ? true : false -> doc/nodemailer
    auth: {
      user: 'mauricio.furlan@hotmail.com',
      pass: 'zw33ud2vaA'
    }
  });

  transport.sendMail({
    from: 'Contato <mauricio.furlan@hotmail.com>',
    to: 'mauricio.furlan@hotmail.com',
    subject: 'Um cliente esta interessado em comprar um carro no Pedrão Automóveis',
    text: JSON.stringify(data, null, 4)
  }).then(item => {
    console.log('resultando do email', item)
  }).catch(err => console.log('err email', err))
}


const listIps = []
function shouldSendMail(req) {
  const timestamp = new Date().getTime();
  let found = false
  listIps.forEach(item => {
    if (item?.ip.includes(req.ip)) {
      found = true
    }
  })
  if (!found) {
    const obj = {
      timestamp,
      ip: [req.ip]
    }
    listIps.push(obj)
    return true;
  }

  listIps.forEach((item, index) => {
    if (item.ip.includes(req.ip) && item.ip.length < 2) {
      item.ip.push(req.ip)
      return true;
    } else if (item.ip.includes(req.ip) && item.ip.length >= 2) {
      if ((timestamp - item.timestamp) < 120000) {
        return false;
      } else {
        listIps.splice(index, 1)
        return true;
      }
    }
  })
}


app.post('/contato', (req, res) => {
  if (shouldSendMail(req)) {
    const data = req.body;
    // sendMail(data)
    console.log('[mock] - enviando email..')
    res.send('ok')
  } else {
    res.send('')
  }
})

app.use("/", router);
app.listen(3000, function (req, res) {
  console.log('Example app listening on port 3000!');
});

// const port = process.env.PORT || 8080;

// server.use(middlewares)
// server.use(router)




// server.listen(port, () => {
//   console.log(`JSON Server is running in ${port}`)
// })