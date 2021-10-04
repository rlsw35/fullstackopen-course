import React, { useState } from "react";
const Feedback = () => {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [userData, setUserData] = useState(feedback);
  console.log(userData);

  const handleGoodEvent = () => {
    setUserData({
      ...userData,
      good: userData["good"] + 1,
    });
  };

  const handleNeutralEvent = () => {
    setUserData({
      ...userData,
      neutral: userData["neutral"] + 1,
    });
  };

  const handleBadEvent = () => {
    setUserData({
      ...userData,
      bad: userData["bad"] + 1,
    });
  };

  const calcAverage = () => {
    return (userData.good + userData.bad + userData.neutral) / 3;
  };

  const calcPositive = () => {
    return (
      (userData.good / (userData.good + userData.bad + userData.neutral)) * 100
    );
  };

  return (
    <div>
      <ButtonComponent
        handleGoodEvent={() => handleGoodEvent()}
        handleBadEvent={() => handleBadEvent()}
        handleNeutralEvent={() => handleNeutralEvent()}
      />
      <Statistics
        userData={userData}
        average={calcAverage()}
        positive={calcPositive()}
      />
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.userData;
  console.log(props);
  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>

          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>

          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>

          <tr>
            <td>All</td>
            <td>{good + neutral + bad}</td>
          </tr>

          <tr>
            <td>Average</td>
            <td>{props.average}</td>
          </tr>

          <tr>
            <td>Positive</td>
            <td>{props.positive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ButtonComponent = (props) => {
  console.log(props);
  //const { goodEvent, badEvent, neutralEvent } = props; cannot destructure functions
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={props.handleGoodEvent}>Good </button>
      <button onClick={props.handleBadEvent}>Bad </button>
      <button onClick={props.handleNeutralEvent}>Neutral </button>
    </div>
  );
};

export default Feedback;
