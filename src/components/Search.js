import React from 'react';

import search from '../assests/search.svg';



const Search = () => {
    return (
        <><input name='Search' placeholder='Search' width={200} height={50}></input>
        <img src={search} ></img>
        </>
    )
}