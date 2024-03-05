import Audio from '../../shared/ui/Audio'
import Text from '../../shared/ui/Text'
import { Texts } from '../../shared/lib/texts/text.ts'
import Input from '../../shared/ui/Input'
import { useState } from 'react'
import Button from '../../shared/ui/Button'
import { RouteEnum } from '../../shared/routes/RouteEnum/routeEnum.ts'
import { useNavigate } from 'react-router-dom'

const QuizPage = () => {
  const [complete, setComplete] = useState(false)
  const navigate = useNavigate()
  const onComplete = () => {
    setComplete(true)
  }
  const buttonHandle = () => {
    navigate(RouteEnum.FINAL)
  }

  return (
    <>
      <Audio
        src={'quiz.mp3'}
        play={true}
      />
      <Text paragraph={Texts.QUIZ} />
      <Input
        onComplete={onComplete}
        placeholder={'code'}
      />
      {complete && (
        <Button
          title={'Финал'}
          onClick={buttonHandle}
        />
      )}
    </>
  )
}

export default QuizPage
