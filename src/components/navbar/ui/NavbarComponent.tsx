import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './NavbarComponent.scss'
export const NavbarComponent = () => {
    return(
        <div className={'navbar-container'}>
            <Navbar expand="lg" className={'navbar'}>
                <Container>
                    <Navbar.Brand className={'brand'}>
                        <NavLink to={'/'} className={'nav-link'}>Сидрерия</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    <Navbar.Collapse id={'responsive-navbar'}>
                        <NavLink to={'/menu'} className={'nav-link'}>Меню</NavLink>
                        <NavLink to={'/bar'} className={'nav-link'}>Бар</NavLink>
                        <NavLink to={'/newest'} className={'nav-link'}>Новинки</NavLink>
                        <NavLink to={'/events'} className={'nav-link'}>Мероприятия</NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}