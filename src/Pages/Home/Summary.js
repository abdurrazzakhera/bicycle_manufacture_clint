import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faTableList,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import "./Summary.css";
import SummaryCart from "./SummaryCart";

const Summary = () => {
  const flag = <FontAwesomeIcon icon={faFlagCheckered} />;
  const project = <FontAwesomeIcon icon={faTableList} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  const review = <FontAwesomeIcon icon={faThumbsUp} />;
  //React count up
  const stateC = <CountUp end={42} />;
  const projectC = <CountUp end={7565} />;
  const userC = <CountUp end={1438} />;
  const reviewS = <CountUp end={1250} />;
  return (
    <div className='lg:container  mx-auto my-20'>
      <h1 className='lg:text-6xl  text-3xl text-primary uppercase font-bold text-center titleAfter'>
        our company statistics{" "}
      </h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 p-3'>
        <SummaryCart text={"State"} counter={stateC} icon={flag}></SummaryCart>
        <SummaryCart
          text={"Deal/Delivery"}
          counter={projectC}
          icon={project}
        ></SummaryCart>
        <SummaryCart text={"User"} counter={userC} icon={user}></SummaryCart>
        <SummaryCart
          text={"Reviews"}
          counter={reviewS}
          icon={review}
        ></SummaryCart>
      </div>
    </div>
  );
};

export default Summary;
