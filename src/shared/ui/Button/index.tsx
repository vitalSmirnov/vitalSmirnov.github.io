import styles from './index.module.css'
import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          onClick={onClick}
          className={styles.button}
        >
          {title}
        </button>
      </div>
    </>
  )
}

export default Button
