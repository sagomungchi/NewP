import {Row, Col, Button, Menu} from "antd";
import Link from 'next/link';
import Head from 'next/head';

const dummy = {
    isLoggedIn: false,
};


const Header = ({children}) => {

    return (
        <>
            <Head>
                <title>toping</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.21.2/antd.css"/>
            </Head>
            <Row style={{fontWeight:"bold"}}>
                <Col xs={2} md={8}>
                    <Menu mode="horizontal" style={{marginTop: "35px", marginLeft: "40px"}}>
                        <Menu.Item key="list"><Link href="/list"><a style={{fontSize: "30px"}}>아이디어
                            리스트</a></Link></Menu.Item>
                        <Menu.Item key="add"><Link href="/add"><a style={{fontSize: "30px"}}>아이디어
                            등록</a></Link></Menu.Item>
                    </Menu>
                </Col>
                <Col xs={20} md={8}>
                    <Menu mode="horizontal" style={{marginTop: "20px", height: "75px",marginLeft:"100px"}}>
                        <Menu.Item key="home"><Link href="/index"><a
                            style={{fontSize: "75px", color:"#34495e"}}>toping</a></Link></Menu.Item>
                    </Menu>
                </Col>
                <Col xs={2} md={3}>
                    <Menu mode="horizontal" style={{marginTop:"30px"}}>
                        <Link href="/event"><Button key="event" style={{border:"gray",backgroundColor:"gray",color:"white" , height: "60px"}}><a
                            style={{fontSize: "30px"}}>U 300모의투자</a></Button></Link>
                    </Menu>
                </Col>
                <Col xs={2} md={5}>
                    <Menu mode="horizontal" style={{marginTop: "35px"}}>
                        <Menu.Item key="login"><Link href="/Login"><a
                            style={{fontSize: "30px"}}>로그인</a></Link></Menu.Item>
                        <Menu.Item key="join"><Link href="/Join"><a
                            style={{fontSize: "30px"}}>회원가입</a></Link></Menu.Item>
                    </Menu>
                </Col>
            </Row>
            {children}

        </>
    )
};

export default Header