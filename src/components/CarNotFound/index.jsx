
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from './index.module.css';

export function CardNotFound() {
  return (
    <div  className={styles.container}>
      <div>
      <ErrorOutlineIcon color="action" sx={{ fontSize: 100 }} />
      </div>
      <div className={styles.ops}>
          Ops! 
      </div>
           No momento não encontramos nenhuma oferta com esses parâmetros.
    </div>
  )
}