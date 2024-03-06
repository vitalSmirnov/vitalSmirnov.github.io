import styles from './index.module.css'
import { useState } from 'react'

interface InputProps {
  placeholder: string
  onComplete: () => void
}
const Input = ({ placeholder, onComplete }: InputProps) => {
  const [error, setError] = useState(false)
  const [final, setFinal] = useState(false)
  const [code, setCode] = useState<string>('')
  const handleInput = (value: string) => {
    setCode(value)
    setError(false)
    if (value.toLowerCase() === 'tudelema') {
      setFinal(true)
      onComplete()
    } else {
      setError(true)
    }
  }

  const supportInputHandle = () => {
    if (code === 'tudelema') {
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
          type={'text'}
          disabled={final}
          placeholder={placeholder}
          onChange={e => handleInput(e.currentTarget.value)}
          className={final ? styles.inputGood : !error ? styles.input : styles.inputError}
        />
        {!final && (
          <button
            className={styles.inputCheckButton}
            onClick={supportInputHandle}
          >
            <img
              className={styles.inputCheckIcon}
              src={'/check.png'}
              alt={'done'}
            />
          </button>
        )}
      </div>
    </>
  )
}

export default Input
