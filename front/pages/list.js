import Header from '../components/Header';
import axios from 'axios';
import {Row, Col} from 'antd';
import Link from 'next/link';

const mainListStyle = {
    width: "300px",
    height: "250px"
}

class List extends React.Component {

    static async getInitialProps({req}) {
        const response = await axios.get('http://localhost:5000/post')
        return {
            posts: response.data
        }
    }


    render() {
        const {posts} = this.props;

        function formatNum(num){
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');
        }

        //users.push({"name":"secondman","id":"2"},{"name":"sdf"});
        axios.put('http://localhost:5000/post/4',{
            team:'사고뭉치아님',
            title:'사고뭉치아님',
            text: "토핑은 만들기가 어려워요3",
            img: "./static/TopiLogo",
            needMoney: "9000000",
            earnMoney: "700000",
            track: ""
        });
        //<PostLink img={ad1.adImg} title={ad1.adTitle} text={ad1.adText}/>

        const userList = posts.map(
            post =>
                <li key={post.id} style={{listStyleType: "none"}}>
                    <Link as={post.title} href={{
                        pathname: '/Post',
                        query: {postImg: post.img, postTitle: post.title, postText: post.text}
                    }}>
                        <Row>
                            <Col md={6}>
                                <img src={post.img} style={mainListStyle}/>
                            </Col>
                            <Col md={18}>
                                <Row>
                                    <h1>{post.title}</h1> - {post.team}
                                </Row>
                                <Row>
                                    {post.text}
                                </Row>
                                <Row>
                                    투자현황
                                    <br/>
                                    <h2>{formatNum(post.earnMoney)}/{formatNum(post.needMoney)}</h2><h4
                                    style={{}}>({(post.earnMoney/post.needMoney*100).toFixed(1)}%)</h4>
                                </Row>
                            </Col>
                        </Row>
                    </Link>

                </li>
        )


        return (
            <Header>
                <ul>
                    {userList}
                </ul>
            </Header>
        );
    }
}

export default List