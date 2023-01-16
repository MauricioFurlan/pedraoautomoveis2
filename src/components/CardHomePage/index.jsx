import { Link } from 'react-router-dom';
import styles from './index.module.css';

export function Card({car}) {

    return (
        <>
    <div className={styles.card}>
        <div className={styles.card_content}>
            <a className={styles.card_image_extra} href="/seminovos/hr-v-1-8-16v-ex-2018-1844"></a>
            <div className={styles.card_image}>
                <div className={styles.container_img} >
                    <div className={styles.card_image_value} >
                        <img src={car.destaque}></img>
                    </div>
                </div>
            </div>
            <div key={car.id} className={styles.car_title}>
            {car.nome_carro}
        </div>
        <div className={styles.content_options}>
            <hr></hr>
            <ul className={styles.card_list}>
                <li>
                    <strong key={car.id}>Cambio: </strong>{car.description.cambio}
                </li>
                <li>
                    <strong key={car.id}>Quilometragem: </strong>{car.description.km}
                </li>
                <li>
                    <strong key={car.id}>Combustivel: </strong>{car.description.combustivel}
                </li>
            </ul>
            <hr></hr>
            <div className={styles.card_year}>
            <span key={car.id} className={styles.card_year_text}>{car.description.ano_modelo}</span>
            </div>
        </div>
        <div className={styles.card_footer}>
            <div className={styles.card_footer_content}>
                <div  key={car.id} className={styles.card_footer_value}>
                R${car.preco}
                </div>
                <div className={styles.card_footer_btn}>
                <Link to={'/car/'+car.id}>ESTOU INTERESSADO</Link>
                </div>
            </div>
        </div>
        </div>
    <div>
    </div>
    </div>
        </>
    )
}