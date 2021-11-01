import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import axios from 'axios';
import {authContext} from '../auth/ProvideAuth';

function UpVoteButtons (props) {
  let { token } = useContext(authContext);

  function submitReaction(up) {
    axios
      .post(
        "https://segware-book-api.segware.io/api/reaction",
        up,
        {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }
      )
      .then((response) => {
        props.setReload(!props.reload);
      })
      .catch((response) => {
        alert("Erro, tente novamente.");
      });
  }

  function addLikeVote() {
    const up = {
      feedId: props.feedId,
      like: true,
    };
    submitReaction(up);
  }

  function addLoveVote() {
    const up = {
      feedId: props.feedId,
      love: true,
    };
    submitReaction(up);
  }

  return(
    <div>
      <Button variant="primary" onClick={() => addLikeVote()}>
         {props.likes} <AiFillLike className="align-text-top"/>
      </Button>
      <Button variant="danger" onClick={() => addLoveVote()} className="ml-1">
         {props.loves} <BsFillSuitHeartFill className="align-text-top"/>
      </Button>
    </div>
  );
}

export default UpVoteButtons;
