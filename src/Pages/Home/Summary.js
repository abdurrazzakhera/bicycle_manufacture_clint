import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlagCheckered,
  faTableList,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Summary.css";
import SummaryCart from "./SummaryCart";

const Summary = () => {
  const flag = <FontAwesomeIcon icon={faFlagCheckered} />;
  const project = <FontAwesomeIcon icon={faTableList} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  const review = <FontAwesomeIcon icon={faThumbsUp} />;
  return (
    <div className='lg:container  mx-auto my-20'>
      <h1 className='lg:text-6xl  text-3xl text-primary uppercase font-bold text-center'>
        our company statistics{" "}
      </h1>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 p-3'>
        <SummaryCart
          text={"Countrys"}
          counter={"100"}
          icon={flag}
        ></SummaryCart>
        <SummaryCart
          text={"Projects"}
          counter={"565+"}
          icon={project}
        ></SummaryCart>
        <SummaryCart text={"User"} counter={"2569+"} icon={user}></SummaryCart>
        <SummaryCart
          text={"Reviews"}
          counter={"1250"}
          icon={review}
        ></SummaryCart>
      </div>
    </div>
  );
};

export default Summary;
