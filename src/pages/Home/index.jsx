import '../../global.css';
import { Card } from "../../components/CardHomePage";
import { Loading } from "../../components/Loading";
import { PageDefault } from "../PageDefault";


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
      <div className="card_container">
        { 
        data != [] ? (
          data.map(item => {
            return <div key={item.id}><Card car={item}/></div>
          })
          ) : (
            <Loading></Loading>
            )
          }
      </div>
      </PageDefault>
      </div>
    </>
  )
}

export default Home