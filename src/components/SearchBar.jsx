import {useState} from "react";

const SearchBar = ({onChange,onSubmit,onClick,input,showAdvanced}) => {



    return(
        <div className="searchbar">
            <form className="searchbar_form" onSubmit={onSubmit}>
                <input className="searchbar_form_input" name="search" type="text" placeholder={`Search by ${input.filter}`} onChange={onChange} />
                <input className="searchbar_form_submit" type="submit"/>
                <div className="searchbar_form_advanced"><label htmlFor="name">Name</label><input type="radio" name="filter" value="name" onChange={onChange}/>
                        <label htmlFor="company">Company</label>
                        <input type="radio" name="filter" value="company" onChange={onChange}/>
                        <label htmlFor="id">ID</label>
                        <input type="radio" name="filter" value="id" onChange={onChange}/>
                </div>
            </form>
        </div>
    )
}


export default SearchBar;