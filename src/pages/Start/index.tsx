import Audio from '../../shared/ui/Audio'
import Text from '../../shared/ui/Text'
import Button from '../../shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'
import { Texts } from '../../shared/lib/texts/text.ts'

const StartPage = () => {
  const navigate = useNavigate()

  const startButtonHandle = () => {
    navigate(RouteEnum.ONBOARDING)
  }

  return (
    <>
      <Audio
        src={'start.mp3'}
        play={true}
      />
      <Text paragraph={Texts.START} />
      <Button
        onClick={startButtonHandle}
        title={'Далее'}
      />
    </>
  )
}

export default StartPage
