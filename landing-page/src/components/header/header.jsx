import React from 'react'
import './header.css'
import P1 from '../../assets/p1.png'
import P2 from '../../assets/p2.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (



    <div className='parent_container'>
      <div className='container_child1'>
        <h5>AMAZING PRODUCT !</h5>
        <h1 className='productName'>BACKPACK</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper justo vel eleifend ultrices. Nullam varius fermentum nisi, in luctus nibh sodales nec. Curabitur eu urna sed arcu aliquam fringilla vel ut purus.
        </p>
        <button className='button'>Shop now</button>

      </div>
      <div className='container_child2'>
        <Slider className='slidContainer' {...settings}>
          <div>
            <img className='imageSlider' src={P2} alt="Slide 2" />
          </div>
          <div>
            <img className='imageSlider' src={P1} alt="Slide 2" />
          </div>


        </Slider>
      </div>
    </div>



  )
}

export default Header