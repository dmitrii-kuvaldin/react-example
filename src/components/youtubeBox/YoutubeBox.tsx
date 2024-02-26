import { FC } from 'react'
// import cn from 'classnames'
import styles from './YoutubeBox.module.css'

const YoutubeBox: FC = () => {
  // const dispatch = useAppDispatch()
  return (
    <div>
      <h1 className={styles.title}>YoutubeBox</h1>
      <div className={styles.videoBox}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&loop=1&sidedock=0&controls=0&title=0&mute=1&start=60"></iframe>

      </div>
    </div>
  )
}

export default YoutubeBox
