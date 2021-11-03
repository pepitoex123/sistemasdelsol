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
            <div className="store_title">
                <FcSearch/>
                <h1>Search</h1>
            </div>
            <SearchBar onSubmit={onSubmit} onChange={onChange} onClick={onClick} input={input} showAdvanced={showAdvanced}/>
            <ProductTable/>
        </section>
    )
}

export default Store;