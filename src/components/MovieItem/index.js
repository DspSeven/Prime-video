// Write your code here
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

const MovieItem = props => {
  const {thumbnailUrl, videoUrl /* categoryId */} = props
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="closeButton">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        position="center"
      >
        {close => (
          <>
            <button type="button" onClick={() => close()}>
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
