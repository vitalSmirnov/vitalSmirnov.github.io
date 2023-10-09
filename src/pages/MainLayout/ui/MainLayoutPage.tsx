import './MainLayout.scss'
import {NavbarComponent} from "../../../components/navbar/ui/NavbarComponent";
import {BackgroundComponent} from "../../../shared/background/ui/BackgroundComponent";
import {TilesComponent} from "../../../components/tiles/ui/TilesComponent";
import {ControlledCarousel} from "../../../components/Newest/ui/Newest";

export const MainLayoutPage = () => {
    return (
        <>
            <NavbarComponent/>
            <BackgroundComponent/>
            <ControlledCarousel/>
            <TilesComponent/>
        </>
    )
}