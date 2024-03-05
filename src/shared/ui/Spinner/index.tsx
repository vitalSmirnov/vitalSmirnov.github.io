import styles from './index.module.css'

const Spinner = () => {
  return (
    <>
      <span className={styles.spinnerContainer}>
        <img
          className={styles.spinner}
          src={'spinner.png'}
          alt={'spinner'}
        />
      </span>
    </>
  )
}

export default Spinner
