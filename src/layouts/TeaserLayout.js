import { GridRow } from '@/components/UI/Grid';

const TeaserContainer = ({ children }) => {
  return (
    <div className="teaser-element-container">
      <GridRow>
        {children}
      </GridRow>
    </div>
  );
};

export default TeaserContainer;
