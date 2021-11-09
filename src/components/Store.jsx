import { FcSearch } from "react-icons/fc";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useState} from "react";


const Store = () => {
    const [input,setInput] = useState({
        search: "",
        filter: "nombre comercial"
    });


    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    const onClick = (e) => {

    }


    return(
        <section className="store">
            <SearchBar onSubmit={onSubmit} onChange={onChange} onClick={onClick} input={input} />
            <hr/>
            <ProductTable input={input}/>
        </section>
    )
}

export default Store;