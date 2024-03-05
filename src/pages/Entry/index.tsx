import Button from '../../shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'

const StartPage = () => {
  const navigate = useNavigate()

  const startButtonHandle = () => {
    navigate(RouteEnum.START)
  }

  return (
    <>
      <Button
        onClick={startButtonHandle}
        title={'Начало'}
      />
    </>
  )
}

export default StartPage
