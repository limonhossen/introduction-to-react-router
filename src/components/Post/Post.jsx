

const Post = ({post}) => {
    const {id, title}= post;
    const postrStyle = {
        border: '2px solid blue',
        padding: '5px',
        borderRadius: '20px'
    }

    return (
        <div style = {postrStyle}>
           <h4>Post of Id: {id}</h4> 
           <p>{title}</p>
        </div>
    );
};

export default Post;