import FilterList from './FilterList';
import { useState } from 'react';

const FilterItems = (props) => {
    const [showList, setShowList] =
    useState(false);

    const handleClick = () => {
        setShowList(!showList);
    };

    return (
        <>
            <div className='filterbox'>
                <form>
                    <input      type="checkbox" 
                    onClick={handleClick}
                    />
                    <label>Search Results</label>
                </form>
            </div>
            <FilterList showList={showList} />
        </>
    );
};

export default FilterItems