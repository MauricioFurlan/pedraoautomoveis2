import styles from './index.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SliderShowCar from '../Slider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Loading } from '../Loading';


export function CardCar({car}) {
    return (

        <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
      {
          car != undefined ? (
              <>
      <div className={styles.content}>
                <div className={styles.name}>
                    {car.nome_carro}
                </div>
                <div className={styles.preco}>
                    R${car.preco}
                </div>
        </div>

      <div className={styles.content_car_info}>
            <div className={styles.content_slider}>
            <SliderShowCar car={car}/>
            <br></br>
            <div className={styles.text}>
            INFORMAÇÕES TÉCNICAS
            </div>
            <div className={styles.info}>
                <div>
                    MARCA: 
                        <span>
                            {car.description.marca}
                        </span>
                </div>
                <div>
                    MODELO: 
                        <span>
                            {car.description.modelo}
                        </span>
                </div>
                <div>
                    VERSÃO: 
                    <span>
                        {car.description.versao}
                    </span> 
                </div>
                <div>
                    QUILOMETRAGEM: 
                    <span>
                        {car.description.km}
                    </span> 
                </div>
                <div>
                    ANO/MODELO: 
                    <span>
                    {car.description.ano_modelo}
                    </span> 
                </div>
                <div>
                    FINAL DA PLACA: 
                    <span>
                    {car.final_placa}
                    </span> 
                </div>
                <div>
                    COR: 
                    <span>
                        {car.description.cor}
                    </span> 
                </div>
                <div>
                    CÂMBIO: 
                    <span>
                    {car.description.cambio}
                    </span> 
                </div>
                <div>
                    COMBUSTÍVEL: 
                    <span>
                    {car.description.combustivel}
                    </span> 
                </div>
            </div>
            <div className={styles.other_info}>
                    {
                        car && car.options_descriptions.map(item => (
                            <>
                             <div className={styles.items} key={car.id}>{item}
                              <span><CheckCircleOutlineIcon fontSize='sm' color="success" /></span>
                             </div>
                            </>
                        ))
                    }
            </div>
            <hr></hr>
            <div className={styles.more_info}>
            <h5>Mais Informações</h5>
            <div className={styles.more_info_text}>
                {car.other_description}
            </div>
            </div>
            </div>
           
        </div>
        </>
        ) : (
            <Loading></Loading>
        )
        }
      </CardContent>
     
    </Card>
    )
}