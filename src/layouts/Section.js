const Section = ({ children, spacingTop = true, spacingBottom = true }) => {
  return (
    <section className={`section-container ${spacingTop ? 'spacing-above-m' : ''} ${spacingBottom ? 'spacing-below-m' : ''}`}>
      <div className="content-size-sl">
        {children}
      </div>
    </section>
  );
};

export default Section;
