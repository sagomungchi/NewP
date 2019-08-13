import Link from 'next/link';

const PostLink = (props) => {

    const aad = props.title;

    const mainListStyle = {
        width: "300px",
        height: "250px"
    };

    return (
        <>
            <li style={{listStyleType:"none"}}>
                <Link as={aad} href={{
                    pathname: '/Post',
                    query: {postImg: props.img, postTitle: props.title, postText: props.text}
                }}>
                    <a><img src={props.img} style={mainListStyle}></img></a>
                </Link>
                <Link as={aad} href={{
                    pathname: '/Post',
                    query: {postImg: props.img, postTitle: props.title, postText: props.text}
                }}>
                    <a style={mainListStyle}><h1>{props.title}</h1></a>
                </Link>

            </li>
        </>
    )
}

export default PostLink