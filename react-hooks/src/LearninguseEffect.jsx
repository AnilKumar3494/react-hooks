import React, { useState } from "react";

function LearninguseEffect() {
  //Another Effecient Way
  const defaultValue = () => {
    console.log("Default State Running");
    return "Click any Button";
  };

  //// BOTH ARE SAME
  //   const [resorceType, setResourceType] = useState(() => defaultValue());
  const [resorceType, setResourceType] = useState(defaultValue);

  return (
    <div className="use-effect state-common-style">
      <h2>Learning useEffect()</h2>
      <div>
        <button onClick={() => setResourceType("Posts Made")}>Posts</button>
        <button onClick={() => setResourceType("Users")}>Users</button>
        <button onClick={() => setResourceType("Comments Posted")}>
          Comments
        </button>
      </div>
      <h3>{resorceType}</h3>
    </div>
  );

  //   const [render, setRender] = useState("Click any button");

  //   function postRender() {
  //     setRender(() => "Posts");
  //   }

  //   function usersRender() {
  //     setRender("Users");
  //   }

  //   function commentsRender() {
  //     setRender("Comments");
  //   }
  //   return (
  //     <div className="use-effect state-common-style">
  //       <h2>Learning useEffect()</h2>
  //       <div>
  //         <button onClick={postRender}>Posts</button>
  //         <button onClick={usersRender}>Users</button>
  //         <button onClick={commentsRender}>Comments</button>
  //       </div>
  //       <h3>{render}</h3>
  //     </div>
  //   );
}

export default LearninguseEffect;
