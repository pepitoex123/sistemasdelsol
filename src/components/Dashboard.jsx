import Header from "./Header";
import {Switch,Route} from "react-router-dom";
import Store from "./Store";


const Dashboard = () => {
    return(
        <div className="dashboard">
            <Header/>
            <Switch>
                <Route path="/dashboard/store">
                    <Store/>
                </Route>
            </Switch>
        </div>
    )
}

export default Dashboard;