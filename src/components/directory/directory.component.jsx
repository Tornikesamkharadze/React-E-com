import "./directory.style.scss";
import data from "../../data/data";
import Category from "../category-item/category";

const Directory = () => {
  return (
    <div className="directory-container">
      {data.map((item) => {
        return <Category key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Directory;
