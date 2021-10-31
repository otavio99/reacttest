import Button from 'react-bootstrap/Button';
import { ImArrowUp } from 'react-icons/im';

function UpVoteButton () {
  return(
    <Button variant="secondary">
       12 <ImArrowUp className="align-text-top"/>
    </Button>
  );
}

export default UpVoteButton;
