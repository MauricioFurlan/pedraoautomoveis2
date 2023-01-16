import { Typography } from "@mui/material";
import { BackPage } from "../../components/BackPage";
import { PageDefault } from "../PageDefault";
import styles from './index.module.css'

export function About() {
    return (
        <>
        <PageDefault>
        <BackPage page={'Quem Somos'}></BackPage>
        <div className={styles.container}>
            <div className={styles.about_us}>
                <img className={styles.img_store}src="https://production.autoforce.com/uploads/group/about_us_image/1748/comprar-manzini-veiculos_8fdd46c840.jpg"></img>
            </div>
            <div>
            </div>
        </div>
        <div className={styles.container_text}>
            <div className={styles.container_text_2}>
                <h3 className={styles.title}>
                Pedrão Automóveis
                </h3>
                <br/>
                <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi hic debitis quisquam fuga? Magni repudiandae eligendi reprehenderit rerum assumenda velit aliquid quaerat tenetur expedita. Enim tempore beatae officiis distinctio. Ullam.
                </div>
            </div>
        </div>
        <div className={styles.space}>
            <br></br>
        </div>
        </PageDefault>
        </>
    );
}