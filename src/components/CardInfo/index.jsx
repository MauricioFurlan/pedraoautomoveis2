import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './index.module.css';

export function CardInfo({car}) {
  let whatMsg = 'https://api.whatsapp.com/send?1=pt_BR&phone=5519981573022'
  if (car != undefined) {
    whatMsg = `https://api.whatsapp.com/send?1=pt_BR&phone=5519981573022&text=Olá Pedrão, gostei do ${car.nome_carro}`
    } 
    return (
        <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography>
        <div className={styles.title}>
            <strong>
            Pedrão Automóveis
            </strong>
        </div>
        <div className={styles.adress}>
            Avenida Visconde de Indaiatuba, 381 Vila Vitória I, Indaiatuba - SP
        </div>
        <div className={styles.adress}>
        <a href={whatMsg}>
        (19) 98157-3022
        </a>
        </div>
        </Typography>
      </CardContent>
    </Card>
    )
}