import "./directory.style.scss";
import data from "../../data/data";
import DirectoryItem from "../directory-item/DirectoryItem";

const Directory = () => {
  return (
    <div className="directory-container">
      {data.map((item) => {
        return <DirectoryItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Directory;
