import '../../global.css';
import { Card } from "../../components/CardHomePage";
import { Loading } from "../../components/Loading";
import { PageDefault } from "../PageDefault";
import {SliderMain} from "../../components/SliderHomePage";


function Home({data}) {
  return (
    <>
      <div className="background">
      <PageDefault>
      <div className='show_logo'>
        <img className='main_img' src="https://img.youtube.com/vi/m12A34xgAQg/maxresdefault.jpg"></img>
      </div>
      <h2 className="title">
        Nossos Destaques
      </h2>
      <h3 className="sub-title">
      Confira os destaques especiais que reservamos para você!
      </h3>
        { 
        data.length > 0 ? (
          <ul className="card_container_slider">
          <SliderMain items={data}/>
          </ul>
          ) : (
            <Loading></Loading>
            )
          }
      </PageDefault>
      </div>
    </>
  )
}

export default Home