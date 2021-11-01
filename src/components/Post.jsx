import Card from 'react-bootstrap/Card';
import UpVoteButton from "./UpVoteButton";

function Post (props) {

  return(
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Body>
        <p>{props.content}</p>
      </Card.Body>
      <div>
        <UpVoteButton />
      </div>
    </Card>
  );
}

export default Post;
