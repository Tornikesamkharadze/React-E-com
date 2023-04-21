import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer } from "./directory.style";

const DirectoryItem = ({ item }) => {
  const { imageUrl, title, route } = item;

  const navigate = useNavigate();
  const navigateToHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={navigateToHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
