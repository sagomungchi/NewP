import axios from 'axios';
import {Row, Col} from 'antd';
import Link from 'next/link';

const mainListStyle = {
    width: "300px",
    height: "250px"
};

class MainList extends React.Component {

    static async getInitialProps({req}) {
        const response = await axios.get('http://localhost:5000/post')
        return {
            posts: response.data
        }
    }

    render() {
        const {posts} = this.props;
        //users.push({"name":"secondman","id":"2"},{"name":"sdf"});
        // users[0].username="tempname";
        //<PostLink img={ad1.adImg} title={ad1.adTitle} text={ad1.adText}/>

        const userList = posts.map(
            post =>
                <>

                    <li key={post.id} style={{listStyleType: "none"}}>

                        <Link as={post.title} href={{
                            pathname: './Post',
                            query: {postImg: post.img, postTitle: post.title, postText: post.text},

                        }}>

                            <div>
                                <Col mode="horizontal">
                                    <img src={post.img} style={mainListStyle}></img>

                                    {post.title}

                                </Col>

                            </div>
                        </Link>
                    </li>
                </>
        );
        return (
            <>
                <head>

                </head>
                {userList}
            </>


        );
    }
}

export default MainList;
