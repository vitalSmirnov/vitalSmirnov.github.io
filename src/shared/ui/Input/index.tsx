import styles from './index.module.css'
import { useState } from 'react'

interface InputProps {
  placeholder: string
  onComplete: () => void
}
const Input = ({ placeholder, onComplete }: InputProps) => {
  const [error, setError] = useState(false)
  const [final, setFinal] = useState(false)
  const handleInput = (value: string) => {
    setError(false)
    if (value.length === 9 && value === "tu'delema") {
      setFinal(true)
      onComplete()
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          type={'string'}
          disabled={final}
          placeholder={placeholder}
          onChange={e => handleInput(e.currentTarget.value)}
          className={final ? styles.inputGood : !error ? styles.input : styles.inputError}
        />
      </div>
    </>
  )
}

export default Input
