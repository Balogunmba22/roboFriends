import React from "react";

const SearchBox = ({searchChange}) => (
    <>
        <input className="p-2 border-2 outline-none border-teal-300 mb-2 "
           type='search'
           placeholder='Search Robots'
           onChange={searchChange}
        />
    </>
)

export default SearchBox;