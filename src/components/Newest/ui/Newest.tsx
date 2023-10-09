import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Container} from "react-bootstrap";
import './Newest.scss'

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={'newest-component'}>
            <Container className={'newest-container'} data-bs-theme="dark">
                <h2 className={'newest-header'}>Новинки</h2>
                <Carousel className={'carousel-newest dark'} activeIndex={index} onSelect={(value) => handleSelect(value)}>
                    <Carousel.Item className={'item'}>
                        <img className={'newest-image'} src={'/secretTaste.jpg'} alt={'error'}/>
                        <Carousel.Caption>
                            <h3 className={'slide-header'}>Secret Taste</h3>
                            <p className={'slide-caption'}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={'item'}>
                            <img className={'newest-image'} src={'/gravity.png'} alt={'error'}/>
                        <Carousel.Caption>
                            <h3 className={'slide-header'}>Gravity</h3>
                            <p className={'slide-caption'}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className={'item'}>
                            <img className={'newest-image'} src={'/LateCheckout.png'} alt={'error'}/>
                        <Carousel.Caption>
                            <h3 className={'slide-header'}>Late Checkout</h3>
                            <p className={'slide-caption'}>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}