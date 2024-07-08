import React from "react";
import classes from "../css-files/Component-CSS/alertsCard.module.css";

function alertsCard() {
  return (
    <div>
      <div className={classes.cardContainer}>
        <div className={classes.headerWrapper}>
          <h1>Alerts and Recomendations</h1>
          <button className={classes.button}>Filter</button>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.wrapper}>
            <p className={classes.name}>Nordstorm</p>
            <p>TYUM7032</p>
            <p>Zone 5</p>
            <p>
              volume <br /> <span className={classes.span}>Low</span>
            </p>
          </div>
          <div className={classes.wrapper}>
            <p className={classes.name}>Macy's</p>
            <p>TYUM7032</p>
            <p>Zone 5</p>
            <p>
              volume <br /> <span className={classes.span}>In Process</span>
            </p>
          </div>
          <div className={classes.wrapper}>
            <p className={classes.name}>Lulu Lemon</p>
            <p>TYUM7032</p>
            <p>Zone 5</p>
            <p>
              volume <br /> <span className={classes.span}>Recieved</span>
            </p>
          </div>
          <div className={classes.wrapper}>
            <p className={classes.name}>Nordstorm</p>
            <p>TYUM7032</p>
            <p>Zone 5</p>
            <p>
              volume <br /> <span className={classes.span}>Delayed</span>
            </p>
          </div>
          <div className={classes.wrapper}>
            <p className={classes.name}>Nordstorm</p>
            <p>TYUM7032</p>
            <p>Zone 5</p>
            <p>
              volume <br /> <span className={classes.span}>Delayed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default alertsCard;
