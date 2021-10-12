export default function CardBody({ card }) {
  return (
    <div className="card-body">
      <h2 className="card-title">{card.title}</h2>
      <p className="card-text">{card.text}</p>
      <button className="card-button">{card.buttonText}</button>
    </div>
  );
}
