import { useParams } from "react-router-dom";
import styles from './index.module.css';
import ContactCard from '../../components/CardContact';
import { CardCar } from '../../components/CardCar';
import { CardInfo } from '../../components/CardInfo';
import { PageDefault } from '../PageDefault';
import { BackPage } from '../../components/BackPage';


function ShowCar({cars}) {
    const { id } = useParams();
    const car = cars.filter(item => item.id == id)[0];
    console.log('aaaaaaaaaaaa', car, id)
    // const [car, setCar] = useState(undefined)
    // useEffect(() => {
    //   const catchData = async () => {
    //       try {
    //           const data = await getCarAsync(id);
    //           setCar(data)
    //         } catch (e) {
    //             console.log(e);
    //             alert('Error at API =/');
    //           }
    //         };
    //     catchData();
    // }, []);
    window.scrollTo(0, 0);
    console.log('carrr', car)
    return (
        <>
      { car &&
        <PageDefault>
        <BackPage page={car}></BackPage>
        <br/>
        <div className={styles.content_car_info}>
        <div>
        <CardCar car={car}></CardCar>
        </div>
        <div>
          <ContactCard car={car}></ContactCard>
        <div className={styles.card_info}>
          <CardInfo car={car}></CardInfo>
        </div>
        </div>
        </div>
        <br/>
        </PageDefault>
        }
        </>
    )
}

export default ShowCar;