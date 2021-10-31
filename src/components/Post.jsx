import Card from 'react-bootstrap/Card';
import UpVoteButton from "./UpVoteButton";

function Post (props) {
  function extractPreview(content) {
    return content.slice(0, 100);
  }

  return(
    <Card className='shadow p-3 mb-5 bg-white rounded'>
      <Card.Body>
        <p> {extractPreview(props.content)} - <a href="/">Veja o post completo</a></p>
      </Card.Body>
      <div>
        <UpVoteButton />
      </div>
    </Card>
  );
}

export default Post;
