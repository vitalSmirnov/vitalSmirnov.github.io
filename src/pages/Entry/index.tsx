import Button from '../../shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'
import styles from './index.module.css'
import CakeIcon from '../../shared/ui/cakeIcon'

const StartPage = () => {
  const navigate = useNavigate()

  const startButtonHandle = () => {
    navigate(RouteEnum.START)
  }

  return (
    <>
      <div className={styles.entryContainer}>
        <CakeIcon />
        <Button
          onClick={startButtonHandle}
          title={'Начало'}
        />
      </div>
    </>
  )
}

export default StartPage
