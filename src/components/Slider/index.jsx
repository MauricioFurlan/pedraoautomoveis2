import Slider from "react-slick";
import styles from './index.module.css';

import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
      <div>
      <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
      <div>
      <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
      <div>
      <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
      <div>
      <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
      <div>
      <img className={styles.img_slider} src="https://production.autoforce.com/uploads/picture/image/167727681/used_model_webp_comprar-ranger-3-2-xlt-4x4-cd-20v-1844_5433605467.jpg.webp"/>
      </div>
    </Slider>
  );
}