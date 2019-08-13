import Header from '../components/Header';
import axios from 'axios';


class Event extends React.Component {

    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/post')
        return {
            posts: response.data
        }
    }
    render() {

        const { posts } = this.props;

        //users.push({"name":"secondman","id":"2"},{"name":"sdf"});
        // users[0].username="tempname";


        const userList = posts.map(
            post => <li key={post.id}>
                {post.id}. {post.team}, {post.title}, {post.text}</li>
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

export default Event