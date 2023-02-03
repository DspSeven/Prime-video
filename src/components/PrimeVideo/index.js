// Write your code here
import Slider from 'react-slick'
import MoviesSlider from '../MoviesSlider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const settings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionCategory = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyCategory = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  console.log(comedyCategory)
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="bg-container">
        <div>
          <h1>Action Movies</h1>
          <Slider {...settings}>
            {actionCategory.map(action => (
              <MoviesSlider key={action.id} action={action} />
            ))}
          </Slider>
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <Slider {...settings}>
            {comedyCategory.map(action => (
              <MoviesSlider key={action.id} action={action} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
