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
                        <img src={car.destaque.url}></img>
                    </div>
                </div>
            </div>
            <div key={car.id} className={styles.car_title}>
            {car.nomeCarro}
        </div>
        <div className={styles.content_options}>
            <hr></hr>
            <ul className={styles.card_list}>
                <li>
                    <strong key={car.id}>Cambio: </strong>{car.descricao[0].cambio}
                </li>
                <li>
                    <strong key={car.id}>Quilometragem: </strong>{car.descricao[0].km}
                </li>
                <li>
                    <strong key={car.id}>Combustivel: </strong>{car.descricao[0].combustivel}
                </li>
            </ul>
            <hr></hr>
            <div className={styles.card_year}>
            <span key={car.id} className={styles.card_year_text}>{car.descricao[0].anoModelo}</span>
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