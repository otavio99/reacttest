import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

function UpVoteButton () {

  const [upVotes, setUpVote] = useState([]);

  function addUpVote() {
    const up = {
      feedId: 0,
      like: true,
      love: true
    };
    setUpVote([...upVotes, up]);
  }

  return(
    <div>
      <Button variant="primary" onClick={() => addUpVote()}>
         {upVotes.length} <AiFillLike className="align-text-top"/>
      </Button>
      <Button variant="danger" onClick={() => addUpVote()} className="ml-1">
         {upVotes.length} <BsFillSuitHeartFill className="align-text-top"/>
      </Button>
    </div>
  );
}

export default UpVoteButton;
