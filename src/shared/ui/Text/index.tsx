import styles from './index.module.css'

interface TextProps {
  paragraph: string
}

const Text = ({ paragraph }: TextProps) => {
  return (
    <div className={styles.pContainer}>
      <p className={styles.p}>{paragraph}</p>
    </div>
  )
}

export default Text
