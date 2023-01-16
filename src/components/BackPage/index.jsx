import { Link } from 'react-router-dom';
import CustomSeparator from '../Breadcrumbs';
import styles from './index.module.css';


export function BackPage({page}) {
    return (
    <div className={styles.page_info}>
        <CustomSeparator page={page}></CustomSeparator>
            <div>
                <Link to='../' className={styles.back_page}>← VOLTAR PARA A PÁGINA ANTERIOR </Link>
            </div>
    </div>
    )
}