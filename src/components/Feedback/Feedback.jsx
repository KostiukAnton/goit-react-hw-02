import css from "../Feedback/Feedback.module.css";

export default function Feedback({ feedback, totalFeedback }) {
  return (
    <ul>
      <li>
        <p className={css.text}>Good: {feedback.good}</p>
      </li>
      <li>
        <p className={css.text}>Neutral: {feedback.neutral}</p>
      </li>
      <li>
        <p className={css.text}>Bad: {feedback.bad}</p>
      </li>
      <li>
        <p className={css.text}>Total: {totalFeedback}</p>
      </li>
      <li>
        <p className={css.text}>
          Positive: {Math.round((feedback.good / totalFeedback) * 100)}%
        </p>
      </li>
    </ul>
  );
}
