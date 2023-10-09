import {TextProps} from "./types";
import './text.scss';

export const TextSchedule = (props: TextProps) => {
    return(
        <>
            <div className={'schedule-container'}>
                <span className={'schedule-tittle'}>{props.tittle}</span>
                <span className={'schedule-text'}>{props.text}</span>
            </div>
        </>
    )
}