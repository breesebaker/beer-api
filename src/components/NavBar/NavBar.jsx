import SearchBox from "./SearchBox";
const NavBar = (props) => {
  const { searchResults, handleChange } = props;

  return (
    <>
      <div className="navbar">
        <div className="title">
          <h1>Beer Me</h1>
        </div>

        <div className="navbar-content">
          <SearchBox
            searchResults={searchResults}
            handleChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
