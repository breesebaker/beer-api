const FilterList = (props) => {
  if (!props.showList) {
    return props.showList;
  }

  return (
    <div className="filterlist">
      <form>
        <input type="checkbox" />
        <label>High ABV</label>
        <br />

        <input type="checkbox" />
        <label>Classic Range</label>
        <br />

        <input type="checkbox" />
        <label>Acidic</label>
      </form>

      <div className="filtered-results">
        <h2>filtered results here</h2>
      </div>
    </div>
  );
};

export default FilterList;
