import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './index.module.css';
import { Checkbox, FormControlLabel, FormGroup, FormControl, Button } from '@mui/material';
import $ from 'jquery';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { formatar } from './helpers';
import { sendPost } from '../../api';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function ContactCard({car}) {
  function getValuesToPost(event) {
    event.preventDefault()
    const auth = $('input[name="authorization"]:checked').length > 0 
    if (!auth) {
      document.getElementById('auth').style.color = "red";
      return;
    } else {
      document.getElementById('auth').style.color = "black";
    }
    const data = {
      Data: moment().format('lll'),
      NomeDoCliente: $('#name_input').val(),
      Email : $('#email_input').val(),
      Telefone : $('#phone_input').val(),
      Mensagem : $('#msg_text').val(),
      Comunicacao_via: {
        Watsapp: $('input[name="whatsapp"]:checked').length > 0 == true ? "Sim" : "Não",
        Telefone: $('input[name="phone"]:checked').length > 0 == true ? "Sim" : "Não",
        Email: $('input[name="email"]:checked').length > 0 == true ? "Sim" : "Não"
      },
      autorizacao_de_dados: auth,
      veiculo_interessado: {
        nome_carro: car.nome_carro,
        modelo: car.description.modelo,
        km: car.description.km,
        preco: car.preco
      }
    }
    sendPost(data, 'http://localhost:3000/contato')
  }

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
      <form onSubmit={getValuesToPost} name="formContact" >
        <Typography gutterBottom variant="h5" component="div">
          Estou Interessado
        </Typography>
        <Typography>
        Preencha o formulário abaixo para receber o contato de um de nossos especialistas:
        </Typography>
          <div className={styles.fields}>
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '90%' },
      }}
      autoComplete="off"
    >
      <TextField name="name_input" id="name_input" label="Nome Completo" variant="outlined" required />
      <TextField type="email" name="email_input" id="email_input" label="E-Mail" variant="outlined" required />
      <TextField type="text"  inputProps={{ maxLength: 13 }}  placeholder="XX XXXXX-XXXX" name="phone_input" id="phone_input" label="Telefone/Whatsapp" variant="outlined" required onKeyPress={()=>formatar("XX XXXXX-XXXX", 'phone_input')}/>
      <TextField
          id="msg_text"
          label="Mensagem"
          multiline
          rows={3}
        />
    </Box>
          </div>
        <div>
        Quero receber contato por:
        <div className={styles.checkbox}>
          <FormControlLabel name="whatsapp" id="whatsapp_checkbox" control={<Checkbox defaultChecked />} label="Whatsapp"  />
          <FormControlLabel name="phone" control={<Checkbox />} label="Telefone"  />
          <FormControlLabel name="email" control={<Checkbox />} label="E-Mail"  />
        </div>
        <hr></hr>
        <div className={styles.authorization} id="auth">
         <div  className={styles.auth_text}>
          <div>
            <FormControlLabel name="authorization" control={<Checkbox />}/>
          </div>
          <div>
            Autorizo o uso de minhas informações pessoais para campanhas de marketing.
            Ao informar meus dados, eu concordo com a <Link to='/politic'><u>Política de Privacidade.</u></Link>
          </div>
          </div> 
        </div>
        </div>
        <hr></hr>

          <Button variant='contained' color='primary' size="large" fullWidth type="submit">
          ESTOU INTERESSADO
          </Button>
      {/* <div className={styles.card_footer_btn} > */}
                {/* <a type="submit">ESTOU INTERESSADO</a> */}
        {/* </div> */}
      </form>
      </CardContent>
    </Card>
  );
}