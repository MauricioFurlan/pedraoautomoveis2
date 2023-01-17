import { Paper, Button } from '@mui/material'
import { Card } from '../CardHomePage';
import { Loading } from '../Loading';
import Slider from 'react-slick';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  display: 'flex',
      flex: 1,
      width: 25,
      justifyContent: "center",
      alignItems: "center",
      height: 95,
      background: "#6c6f7a",
      transition: 500,
      top:25,
      }
    }
      onClick={onClick}
      
    ></div>
  );
}

export function SliderMain({items})
{
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        autoplay: true,
        pauseOnHover: true,
        nextArrow: (
          <SamplePrevArrow/>
        ),
        prevArrow: (
          <SamplePrevArrow/>
        ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                Arrows: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                Arrows: false

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                Arrows: false
              }
            }
          ]
      };
    return (
      <>
            <Slider {...settings}>
            { 
            items.length > 0 ? (
            items.map(item => {
                return  <Card key={item.id} car={item}/>
            })
            ) : (
            <Loading></Loading>
            )
            }
            </Slider>
        </>
    )
}

export function Item(props)
{
    console.log('props', props)
    return (
        <Paper>
            {<Card car={props}/>}
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}