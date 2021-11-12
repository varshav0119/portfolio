import React from "react";
import Greeting from "../../containers/greeting/Greeting";


function Home(props) {
  return (
    <div>
      <Greeting theme={props.theme} />
    </div>
  );
}

export default Home;
