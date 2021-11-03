import { FcSearch } from "react-icons/fc";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


const Store = () => {
    return(
        <section className="store">
            <div className="store_title">
                <FcSearch/>
                <h1>Search</h1>
            </div>
            <SearchBar/>
            <ProductTable/>
        </section>
    )
}

export default Store;