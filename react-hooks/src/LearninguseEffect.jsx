import React, { useEffect, useState } from "react";

function LearninguseEffect() {
  const [resource, setResource] = useState("");

  //State for printing out / rendering data from JSON to our webpage
  const [resourceItem, setResourceItem] = useState([]);

  useEffect(() => {
    if (!resource) {
      return;
    }

    // Fetching data from JSON
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
          setResourceItem(json);
        } else {
          setResourceItem([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [resource]);

  /*
  //Window Width - calculation
  //Lazy initialization - not necessary but useful when intial value is a complex calculation
  const innerWindowWidth = () => window.innerWidth;
  const [windowWidth, setwindowWidth] = useState(() => innerWindowWidth());
*/

  //Window width and height calculation

  const [width, setwidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //width
  const widthHandler = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", widthHandler);
  }, []);

  //height
  const heightHandler = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", heightHandler);
  });

  return (
    <div className="state-common-style use-effect">
      <h2>Learning useEffect()</h2>
      <div className="dimensions">
        <h3>
          Window Width: <span>{width}</span>
        </h3>
        <h3>
          Window Height: <span>{height}</span>
        </h3>
      </div>
      <h3>Click any button</h3>
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
      <div className="resource_container">
        {resourceItem.map((allItems, index) => {
          return <pre key={index}>{JSON.stringify(allItems)}</pre>;
        })}
      </div>
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

/*Structure of use effect
useEffect(() =>{
  //The code that we want to run
  //Optional return function
  }, []) // dependency array
*/
