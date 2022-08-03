const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
// if no title is provided, then, the specify on the defaults of the header will appear.
Header.defaultProps = {
  title: "Default Title",
};

export default Header;
