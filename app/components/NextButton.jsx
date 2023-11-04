const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      // we dispatch a new action
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
      </>
    );

  //   if (!numQuestions) return <button className="btn btn-ui">Restart</button>;
};
export default NextButton;
