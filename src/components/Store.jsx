import { FcSearch } from "react-icons/fc";
import SearchBar from "./SearchBar";


const Store = () => {
    return(
        <section className="store">
            <div className="store_title">
                <FcSearch/>
                <h1>Search</h1>
            </div>
            <SearchBar/>
        </section>
    )
}

export default Store;