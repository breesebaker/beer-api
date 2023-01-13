import FilterItems from "./FilterItems";

const SearchBox = (props) => {
    const { searchResults, handleChange } = props;

    const filterClick = (click) => {
        const filterValue = click.target;
        fetch (`https://api.punkapi.com/v2/beers`)
        .then((res) => {
            return res.json();
        })
        .then((returnedData) => {
            const filterData = returnedData.filter((beer) => {
                return beer.name.toLowerCase().includes(filterValue.toLowerCase()) 
            });
            filterData.map((beer) => {
                return <FilterItems beer={beer.name} abv={beer.abv} description={beer.description} classics={beer.first_Brewed} />
            });
        });
    }; 

    return (
        <div className="searchbox">
            <form>
                <input type="text" placeholder="Find your beer" onChange={handleChange} />
            </form>  

            <FilterItems filterClick={filterClick} />

            <div className="searchbox-results">
                {searchResults.map((beer) => {
                    return <p>{beer.name}</p>;
                })}
            </div>            
        </div>
    );
};

export default SearchBox;