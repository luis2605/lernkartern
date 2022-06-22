import React, { useState } from "react";
import ReactDom from "react-dom";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "./modal.module.css";

const Modal = (props) => {
  console.log(props.onChangeModalStatus);

  function BtnHandler() {
    props.onRemoveModal(false);
  }

  return (
    <div style={{ display: props.onChangeModalStatus ? "block" : "none" }}>
      <div className={classes.backdrop} onClick={BtnHandler}>
        <Card className={classes.modal}>
          <header>
            <h2>Answer to Question </h2>
          </header>
          <div className={classes.content}>
            <img
              className={classes.imgAnswer}
              src={props.answer[props.index].imga}
              alt={props.answer[props.index].id}
              style={{
                display:
                  props.answer[props.index].imga !== "" ? "block" : "none",
              }}
            />
            <p>{props.answer[props.index].answer}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={BtnHandler}> Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
