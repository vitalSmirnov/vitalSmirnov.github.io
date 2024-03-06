import styles from './index.module.css'

const CakeIcon = () => {
  return (
    <>
      <div className={styles.cakeIconContainer}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='150'
          height='150'
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
          <path d='M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z' />
          <path
            d='M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4
            2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0
             1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197'
          />
          <g className={styles.cakeIconPulse}>
            <path d='M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z' />
          </g>
        </svg>
      </div>
    </>
  )
}

export default CakeIcon