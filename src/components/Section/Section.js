const Section = ({ title, children }) => {
  return (
    <div className="style.section">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
