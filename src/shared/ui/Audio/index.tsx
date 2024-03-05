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
              width='48'
              height='48'
              viewBox='0 0 48 48'
              stroke-width='1.5'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <circle
                stroke='none'
                fill={'#F3D5C0'}
                cx='50%'
                cy='50%'
                r='22'
              />
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M10 26v-6a6 6 0 0 1 4 -6h22m-6 -6l6 6l-6 6' />
              <path d='M38 22v6a6 6 0 0 1 -4 6h-22m6 6l-6 -6l6 -6' />
            </svg>
          </button>
        )}
      </div>
    </>
  )
}

export default Audio
