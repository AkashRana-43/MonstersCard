// import { Component } from "react";
import './search-box.style.css'


import React from 'react'

const SearchBox = ({onChangeHandler, placeholder, className}) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)


// class SearchBox extends Component {
//     render() {

//         const {onChangeHandler, placeholder, className} = this.props;

//         return (
//             <input
//                 className={`search-box ${className}`}
//                 type='search'
//                 placeholder={placeholder}
//                 onChange={onChangeHandler}
//             />
//         )
//     }
// }

export default SearchBox