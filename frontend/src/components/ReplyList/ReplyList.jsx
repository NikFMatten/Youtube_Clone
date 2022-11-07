import React from "react";
import Reply from "../Reply/Reply";

const ReplyList = (props) => {
  const { replies } = props;

  return (
    <div>
      <ul>
        {replies.map(({ id, user: { username }, text }) => (
          <Reply key={id} username={username} text={text} />
        ))}
      </ul>
    </div>
  );
};

export default ReplyList;
