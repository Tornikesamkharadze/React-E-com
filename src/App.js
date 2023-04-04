import "./App.css";

const categories = [
  { id: 1, title: "Hats" },
  { id: 2, title: "Jackets" },
  { id: 3, title: "Sneakers" },
  { id: 4, title: "Womens" },
  { id: 5, title: "Mens" },
];

function App() {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{item}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
