import Header from "./Header";
import {Switch,Route} from "react-router-dom";
import Store from "./Store";
import CartCheckout from "./CartCheckout";


const Dashboard = () => {


    return(
        <div className="dashboard">
            <Header/>
            <Switch>
                <Route path="/dashboard/store">
                    <Store/>
                </Route>
                <Route path="/dashboard/cartcheckout">
                    <CartCheckout/>
                </Route>
            </Switch>
        </div>
    )
}

export default Dashboard;