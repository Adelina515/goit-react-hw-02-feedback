const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>total {total}</li>
      <li>positive percentage {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;
