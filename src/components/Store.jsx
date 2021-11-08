import { FcSearch } from "react-icons/fc";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useState} from "react";


const Store = () => {
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
        <section className="store">
            <SearchBar onSubmit={onSubmit} onChange={onChange} onClick={onClick} input={input} showAdvanced={showAdvanced}/>
            <hr/>
            <ProductTable input={input}/>
        </section>
    )
}

export default Store;