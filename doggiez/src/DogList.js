import "./styles.css";

export default function ShoppingList({ dogsImgs }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>Cute Dogs 🐶</h3>
      {dogsImgs.map((dogImg, index) => (
        <img key={index} src={dogImg} />
      ))}
    </div>
  );
}
