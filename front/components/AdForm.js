import React from 'react';
import {Carousel, Row, Col} from "antd";

const adFormStyle= {
    width: '600px',
    height: '400px'
};

const ad1 = {
    adImg: '../static/yes.png',
    adTitle:"사고뭉치",
    adText: "《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다.",
};
const ad2 = {
    adImg: "../static/TopiLogo.png",
    adTitle:"광고 2",
    adText: "《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다."
};
const ad3 = {
    adImg: "../static/Sagomungchi.png",
    adTitle: "광고 3",
    adText:"《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다."
};

const AdForm = () => {
    return (
        <>

            <Carousel autoplay>
                <div>
                    <Row>
                        <Col span={10}>
                            <img src={ad1.adImg} style={adFormStyle}></img>
                        </Col>
                        <Col span={10}>
                            <Row>
                                <h1>
                                    {ad1.adTitle}
                                </h1>
                            </Row>
                            <Row>
                                <h3>
                                    {ad1.adText}
                                </h3>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={10}>
                            <img src={ad2.adImg} style={adFormStyle}></img>
                        </Col>
                        <Col span={10}>
                            <Row>
                                <h1>
                                    title ad1
                                </h1>
                            </Row>
                            <Row>
                                <h3>
                                    {ad1.adText}
                                </h3>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span={10}>
                            <img src={ad3.adImg} style={adFormStyle}></img>
                        </Col>
                        <Col span={10}>
                            <Row>
                                <h1>
                                    title ad1
                                </h1>
                            </Row>
                            <Row>
                                <h3>
                                    {ad1.adText}
                                </h3>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </Carousel>
        </>

    )
};

export default AdForm;