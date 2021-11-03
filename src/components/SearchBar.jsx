import {useState} from "react";

const SearchBar = () => {

    const [input,setInput] = useState({
        search: "",
        filter: "name"
    });

    const [showAdvanced,setShowAdvanced] = useState(false);

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    const onClick = (e) => {
        setShowAdvanced(!showAdvanced);
    }



    return(
        <div className="searchbar">
            <form className="searchbar_form" onSubmit={onSubmit}>
                <input className="searchbar_form_input" name="search" type="text" placeholder={`Search by ${input.filter}`} onChange={onChange} />
                <input className="searchbar_form_submit" type="submit"/>
                <span className="searchbar_form_span" onClick={onClick}>
                    Show Advanced Filters
                </span>
                {
                    showAdvanced ? <div className="searchbar_form_advanced"><label htmlFor="name">Name</label><input type="radio" name="filter" value="name" onChange={onChange}/>
                        <label htmlFor="company">Company</label>
                        <input type="radio" name="filter" value="company" onChange={onChange}/>
                        <label htmlFor="id">ID</label>
                        <input type="radio" name="filter" value="id" onChange={onChange}/> </div> : ""
                }
            </form>
        </div>
    )
}


export default SearchBar;