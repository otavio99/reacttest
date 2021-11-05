import Card from 'react-bootstrap/Card';
import UpVoteButtons from "./UpVoteButtons";

function Post (props) {

  return(
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Body>
        <p id={""+props.feedId}>{props.content}</p>
      </Card.Body>
      <div>
        <UpVoteButtons
          likes={props.likes}
          loves={props.loves}
          feedId={props.feedId}
          reload={props.reload}
          setReload={props.setReload}
        />
      </div>
    </Card>
  );
}

export default Post;
