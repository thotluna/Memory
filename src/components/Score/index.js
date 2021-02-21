import "./Score.css";

export default function Score({ title, number }) {
  return (
    <>
      <div className="score">
        <h2>{title}</h2>
        <strong>{number}</strong>
      </div>
    </>
  );
}
