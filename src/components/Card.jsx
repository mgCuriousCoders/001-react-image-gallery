import "../components/Card.css";

const Card = (props) => {
  console.log("ne geliyo", props);
  return (
    <div className="container">
      <div className="image-container">
        <img src={props.data.src.large} width="320" height="320" alt="" />
      </div>
      <div className="title">
        <p>{props.data.photographer}</p>
      </div>
    </div>
  );
};

export default Card;
