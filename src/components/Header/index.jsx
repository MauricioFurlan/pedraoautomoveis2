import styles from './index.module.css';
import { SocialIcon } from 'react-social-icons';
import logo from '../../asset/logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.nav}>
                     <Link to='/'>
                        <img className={styles.logo} src={logo}/>
                     </Link>
                        <div className={styles.network}>
                        <SocialIcon url="https://instagram.com/pedrao.automoveis" />
                        <SocialIcon url="https://www.facebook.com/profile.php?id=100054488048390" />
                        <SocialIcon url="https://api.whatsapp.com/send?phone=5519981573022" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}