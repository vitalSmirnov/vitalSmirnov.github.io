import { useNavigate } from 'react-router-dom'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'
import Spinner from '../../shared/ui/Spinner'
import Text from '../../shared/ui/Text'
import { Texts } from '../../shared/lib/texts/text.ts'
import Button from '../../shared/ui/Button'
import Audio from '../../shared/ui/Audio'
import { useState } from 'react'

const OnBoardingPage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const onBoardingButtonHandle = () => {
    navigate(RouteEnum.QUIZ)
  }

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Audio
            src={'onboarding.mp3'}
            play={!loading}
          />
          <Text paragraph={Texts.ONBOARDING} />
          <Button
            onClick={onBoardingButtonHandle}
            title={'Далее'}
          />{' '}
        </>
      )}
    </>
  )
}

export default OnBoardingPage
