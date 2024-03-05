import Text from '../../shared/ui/Text'
import { Texts } from '../../shared/lib/texts/text.ts'
import Audio from '../../shared/ui/Audio'
import { useEffect, useState } from 'react'

const FinalPage = () => {
  const [firstPlay, setPlay] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPlay(false)
    }, 36000)
  }, [])

  return (
    <>
      <Audio
        src={'final.mp3'}
        play={firstPlay}
      />
      <Audio
        src={'final_2.mp3'}
        play={!firstPlay}
        buttonless
      />
      <Text paragraph={Texts.FINAL} />
      <Text paragraph={Texts.FINAL_EXTENDED} />
      {!firstPlay && <Text paragraph={Texts.FINAL_2} />}
    </>
  )
}

export default FinalPage
