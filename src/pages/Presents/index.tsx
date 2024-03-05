import Audio from '../../shared/ui/Audio'
import Text from '../../shared/ui/Text'
import { Texts } from '../../shared/lib/texts/text.ts'
import Button from '../../shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'

const PresentsPage = () => {
  const navigate = useNavigate()
  const presentsButtonHandle = () => {
    navigate(RouteEnum.QUIZ)
  }

  return (
    <>
      <Audio
        src={'presents.mp3'}
        play={true}
      />
      <Text paragraph={Texts.PRESENTS} />
      <Button
        onClick={presentsButtonHandle}
        title={'Далее'}
      />
    </>
  )
}

export default PresentsPage
