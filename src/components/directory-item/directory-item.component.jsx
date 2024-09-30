import {DirectoryMenuContainer, BackgroundImage, Body} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryMenuContainer>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryMenuContainer>
  );
};

export default DirectoryItem;
