import React, { useState } from "react";

function LearninguseEffect() {
  const defaultState = () => {
    return "Click any button above";
  };

  const [resource, setResource] = useState(defaultState);

  return (
    <div className="state-common-style use-effect">
      <h2>Learning useEffect()</h2>
      <div>
        <button onClick={() => setResource("Posts")}>Posts</button>
        <button
          onClick={function clickHandler() {
            setResource("Users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResource("Comments");
          }}
        >
          Comments
        </button>
      </div>
      <p>{resource}</p>
    </div>
  );
}

export default LearninguseEffect;

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
