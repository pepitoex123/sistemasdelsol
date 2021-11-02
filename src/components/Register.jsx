import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState} from "react";

const Register = () => {

    const [inputs,setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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
        <section className="register">
            <img src={Logo} className="register_image" alt="Drogueria Del Sol"/>
            <h1 className="register_title">Register</h1>
            <form className="register_form">
                <BiUser/>
                <label htmlFor="email">Email</label>
                <input type="email" className="register_form_input" name="email" id="email" placeholder="Email" onChange={(e) => onChange(e) }/>
                <BiKey/>
                <label htmlFor="password">Password</label>
                <input type="password" className="register_form_input" name="password" id="password" placeholder="Password" onChange={(e) => onChange(e) }/>
                <BiKey/>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="register_form_input" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => onChange(e) }/>
                <span className="register_form_link">Do you already have an account? <Link to="/login"><a>Login Now</a></Link></span>
                <input type="submit" value="Register" className="register_form_submit"/>
            </form>
        </section>
    )
}


export default Register;