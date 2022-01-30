import React from 'react';

const About = (props) => {

    const btnClasses = ["btn", "m-1"];
    if(props){
        btnClasses.push("btn-danger");
    }else{
        btnClasses.push("btn-success");
    }
  return (
      <>
      <button className={btnClasses.join(" ")} onClick={props.click}>Click Me</button>
      </>
  );
};

export default About;
