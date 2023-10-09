import {TileProps} from "../helpers/types";
import './tile.scss'

export const Tile = (props: TileProps) => {
    return(
        <>
            <div className={`tile`}>
                {props.tittle && <h3 className={'tile-tittle'}>{props.tittle}</h3>}
                {props.content &&
                    <div className={'tile-content'}>
                        {props.content}
                    </div>
                }
            </div>
        </>
    )
}