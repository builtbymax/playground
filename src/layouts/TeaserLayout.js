const TeaserContainer = ({ children }) => {
  return (
    <div className="teaser-element-container">
      <div className="grid-row">
        {children}
      </div>
    </div>
  );
};

export default TeaserContainer;
