import React, { useState } from "react";
import ReactDom from "react-dom";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./questions.module.css";
import Modal from "./Modal";
import Card from "./UI/Card";

import Button from "./UI/Button";

function Questions(props) {
  // handling questions nav
  const [indexQuestion, setIndexQuestion] = useState(0);

  const ChangeQuestionNext = () => {
    if (indexQuestion === props.data.length - 1) {
      return setIndexQuestion(0);
    } else {
      return setIndexQuestion(indexQuestion + 1);
    }
  };
  const ChangeQuestionPrev = () => {
    if (indexQuestion > 0) {
      return setIndexQuestion(indexQuestion - 1);
    } else {
      return setIndexQuestion(indexQuestion + props.data.length - 1);
    }
  };

  // handling modal
  const [modalShown, setModalShown] = useState(false);

  function ChangeModalStatus() {
    setModalShown(true);
  }
  function RemoveModal(value) {
    setModalShown(value);
  }

  return (
    <div className={classes.questionsContainer}>
      <h2> {props.data[indexQuestion].modul}</h2>
      <img
        className={classes.imgQuestion}
        src={props.data[indexQuestion].img}
        alt={props.data[indexQuestion].id}
        style={{
          display: props.data[indexQuestion].img !== "" ? "block" : "none",
        }}
      />

      {ReactDom.createPortal(
        <Modal
          answer={props.data}
          index={indexQuestion}
          onChangeModalStatus={modalShown}
          onRemoveModal={RemoveModal}
        />,
        document.getElementById("modal")
      )}

      <div>
        <h3>{props.data[indexQuestion].question}</h3>
      </div>
      <div className={classes.levelContainer}>
        <span
          className="material-icons"
          style={{
            color: props.data[indexQuestion].level === 1 ? "white" : "white",
          }}
        >
          &#xE836;
        </span>
        <span
          class="material-icons"
          style={{
            color: props.data[indexQuestion].level === 1 ? "" : "white",
          }}
        >
          &#xE836;
        </span>
        <span
          class="material-icons"
          style={{
            color: props.data[indexQuestion].level === 3 ? "white" : "",
          }}
        >
          &#xE836;
        </span>
      </div>
      <Button type="button" onClick={ChangeModalStatus}>
        Answer to question {props.data[indexQuestion].id}
      </Button>
      <div className={classes.btnContainer}>
        <Button onClick={ChangeQuestionPrev}> Prev </Button>
        <Button type="button" onClick={ChangeQuestionNext}>
          {" "}
          Next{" "}
        </Button>
      </div>
    </div>
  );
}

export default Questions;
