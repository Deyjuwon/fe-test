import React from "react";
import classes from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}>
      </div>
    </div>
  );
};

export default Spinner;
