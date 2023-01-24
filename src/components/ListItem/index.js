import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const ListItem = props => {
  const {songDetails, clickButton} = props
  const {id, name, genre, duration, imageUrl} = songDetails

  const onClickButton = () => {
    clickButton(id)
  }

  return (
    <li className="list-container">
      <div className="song-container">
        <div className="image-song-container">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="song-head">{name}</p>
            <p className="song-para">{genre}</p>
          </div>
        </div>
        <div className="duration-delete-container">
          <p className="duration-para">{duration}</p>
          <button
            className="button"
            type="button"
            onClick={onClickButton}
            data-testid="delete"
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ListItem
