// Write your code here
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {action} = props
  const {thumbnailUrl, videoUrl, categoryId} = action
  return (
    <div>
      <MovieItem
        thumbnailUrl={thumbnailUrl}
        videoUrl={videoUrl}
        categoryId={categoryId}
      />
    </div>
  )
}
export default MoviesSlider
