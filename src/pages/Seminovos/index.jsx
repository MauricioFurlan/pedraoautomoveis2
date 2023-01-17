import CardFindCar from "../../components/CardFindCar";
import { PageDefault } from "../PageDefault";
import styles from './index.module.css'
import { useContext, useEffect, useState } from "react";
import { getAllCategoriesAsync } from "../../api";
import { Card } from "../../components/CardHomePage";
import { Loading } from "../../components/Loading";
import { BackPage } from "../../components/BackPage";
import { UserContext } from "../../context/car.context";
import { CardNotFound } from "../../components/CarNotFound";

export default function Seminovos({cars}) {
    // const { cars } = useContext(UserContext);
    const [car, setCar] = useState(undefined)
    const [notCarFound, setNotCarFound] = useState(true)

    function updateListCars(foundCars) {
        console.log('foundCars', foundCars)
        if (!foundCars) return;
        setCar(foundCars)
    }

    function isCarFound(isFound) {
        setNotCarFound(isFound)
    }

    useEffect(() => {
      const catchData = async () => {
          try {
              if (cars.length == 0) {
                throw new Error();
              }
              setCar(cars)
            } catch (e) {
                // const data = await getAllCategoriesAsync();
                setCar(cars)
              }
            };
        catchData();
    }, []);

    return (
        <>
        { car && 
        <PageDefault>
        <div className={styles.back}>
        <BackPage page={'Seminovos'}></BackPage>
        </div>
        <div className={styles.container}>
        <div className={styles.container_find}>
        <CardFindCar cars={cars} updateListCars={updateListCars} isCarFound={isCarFound}/>
        </div>
        <div className={styles.grid_veic}>
            <div className={styles.card_container_veic}>
            { 
            car.length > 0 ? (
            car.map(item => {
                return <div className={styles.car}><Card car={item} key={item.id}/></div>
            })
            ) : (
                <>
                </>
                )
            }
            </div>
        </div>
            <div className={notCarFound ? styles.invisible: styles.not_found_page}>
            <CardNotFound/>
            </div>
        </div>
        </PageDefault>
        }
        </>
    );
}