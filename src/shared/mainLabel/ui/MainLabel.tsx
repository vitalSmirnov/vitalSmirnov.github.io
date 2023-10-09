import './MainLabel.scss'
import {Container} from "react-bootstrap";

export const MainLabel = () => {
    return (
        <>
            <Container className={'label-container'}>
                <h1 className={'tittle'}>Сидрерия</h1>
                <hr className='hr hr-blurry'/>
                <span className={'sub-tittle'}>ДЛЯ ПРИЯТНОГО ВЕЧЕРА</span>
                <div className={'btn-container'}>
                    <button className={'btn-square-white'}>ЕЩЕ</button>
                </div>
            </Container>
        </>
    )
}