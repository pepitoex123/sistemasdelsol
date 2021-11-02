import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState} from "react";

const Login = () => {

    const [inputs,setInputs] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(...inputs);
    }



    return(
        <section className="login">
            <img src={Logo} className="login_image" alt="Drogueria Del Sol"/>
            <h1 className="login_title">Login</h1>
            <form className="login_form" onSubmit={onSubmit}>
                <BiUser/>
                <label htmlFor="email">Email</label>
                <input type="email" className="login_form_input" name="email" id="email" placeholder="Email" onChange={(e) => onChange(e) }/>
                <BiKey/>
                <label htmlFor="password">Password</label>
                <input type="password" className="login_form_input" name="password" id="password" placeholder="Password" onChange={(e) => onChange(e) }/>
                <span className="login_form_link">Do you not have an account? <Link to="/register"><a>Register Now</a></Link></span>
                <input type="submit" value="Login" className="login_form_submit"/>
            </form>
        </section>
    )
}


export default Login;