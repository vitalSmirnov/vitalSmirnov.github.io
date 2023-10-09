import {Tile} from "../../../shared/Tile/ui/tile";
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import './Tiles.scss'
import React from "react";
import {TextSchedule} from "../../../shared/TextSchedule/textSchedule";

export const TilesComponent = () => {
    return(
        <>
            <div className={'tiles-component'}>
                <h2 className={'newest-header'}>О нас</h2>
                <Container className={'center-block'}>
                    <div className={'tiles-100'}>
                        <Row className={'center-block'}>
                            <Col className={'tile-item brown'}>
                                <Tile content={
                                    <>
                                        <TextSchedule text={'17:00-01:00'} tittle={'пн-чт'}/>
                                        <TextSchedule text={'17:00-03:00'} tittle={'пт-сб'}/>
                                        <TextSchedule text={'17:00-23:00'} tittle={'вс'}/>
                                    </>}
                                      tittle={'Часы работы'}/>
                            </Col>
                            <Col className={'tile-item-image'}>
                                <img className={'tile-image'} src={'/img2.png'} alt={'error'}/>
                            </Col>
                        </Row>
                        <Row className={'center-block'}>
                            <Col className={'tile-item-image'}>
                                <img className={'tile-image'} src={'/img1.png'} alt={'error'}/>
                            </Col>
                            <Col className={'tile-item brown'}>
                                <Tile content={
                                    <ListGroup>
                                        <ListGroupItem>
                                            <span>Сидры</span>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <span>Медовухи</span>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <span>Сайзеры</span>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <span>Портеры и Стауты</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                } tittle={'У нас есть'}/>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}