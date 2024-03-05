import { useEffect, useRef } from 'react'
import styles from './index.module.css'

interface AudioProps {
  src: string
  play: boolean
  buttonless?: boolean
}

const Audio = ({ src, play, buttonless = false }: AudioProps) => {
  const playerRef = useRef<HTMLAudioElement>(null)
  const replayHandle = () => {
    playerRef.current?.play()
  }

  useEffect(() => {
    if (play) {
      setTimeout(() => {
        playerRef.current?.play()
      }, 300)
    }
  }, [play])

  return (
    <>
      <div className={styles.audioContainer}>
        <audio
          ref={playerRef}
          autoPlay={play}
        >
          <source
            src={src}
            type='audio/mp3'
          />
        </audio>
        {!buttonless && (
          <button
            className={styles.audioControl}
            onClick={replayHandle}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-repeat'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3' />
              <path d='M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3' />
            </svg>
          </button>
        )}
      </div>
    </>
  )
}

export default Audio
