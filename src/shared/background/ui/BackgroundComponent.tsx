import './Background.scss'
import {MainLabel} from "../../mainLabel/ui/MainLabel";
export const BackgroundComponent = () => {
    return(
        <>
            <div className={'background'}>
                <img className={'image-background'} src={'/background.jpg'} alt={'image'}/>
                <div className={'main-label-container'}>
                    <MainLabel/>
                </div>
            </div>
        </>
    )
}