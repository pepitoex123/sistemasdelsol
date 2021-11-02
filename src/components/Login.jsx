import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";

const Login = () => {
    return(
        <section className="login">
            <img src={Logo} className="login_image" alt="Drogueria Del Sol"/>
            <h1 className="login_title">Login</h1>
            <form className="login_form">
                <BiUser/>
                <label htmlFor="email">Email</label>
                <input type="email" className="login_form_input" name="email" id="email" placeholder="Email"/>
                <BiKey/>
                <label htmlFor="password">Password</label>
                <input type="password" className="login_form_input" name="password" id="password" placeholder="Password"/>
                <span className="login_form_link">Do you not have an account? <a>Register Now</a></span>
                <input type="submit" value="Login" className="login_form_submit"/>
            </form>
        </section>
    )
}


export default Login;