import Slider from "react-slick";
import { Loading } from "../Loading";
import styles from './index.module.css';


export default function SliderShowCar({car}) {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,
    Arrows: false,
  };
  return (
    <Slider {...settings}>
      {
        car !== undefined ? (
          car.fotos.map(pathImage => {
            return (
              <div>
              <img className={styles.img_slider} src={pathImage.url}/>
              </div>
            )
          })
        ) : <Loading/>
      }
    </Slider>
  );
}