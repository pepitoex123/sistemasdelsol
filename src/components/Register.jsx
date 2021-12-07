import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState,useRef} from "react";

const Register = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [inputs,setInputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChange = (e) => {

        if(e.target.name === "email" && !(e.target.value.length === 0)){
            emailRef.current.classList.add("register_form_placeholder_active");
        }

        if(e.target.name === "email" && e.target.value.length === 0){
            emailRef.current.classList.remove("register_form_placeholder_active");
        }

        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("register_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("register_form_placeholder_active_password");
        }

        if(e.target.name === "confirmPassword" && !(e.target.value.length === 0)){
            confirmPasswordRef.current.classList.add("register_form_placeholder_active_confirmpassword");
        }

        if(e.target.name === "confirmPassword" && e.target.value.length === 0){
            confirmPasswordRef.current.classList.remove("register_form_placeholder_active_confirmpassword");
        }


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
            <h1 className="register_title">Registrarse</h1>
            <form className="register_form" onSubmit={onSubmit}>
                <div className="register_form_placeholder" ref={emailRef}>
                    <BiUser/>
                    <label htmlFor="email">Email</label>
                </div>
                <input type="email" className="register_form_input" name="email" id="email" onChange={(e) => onChange(e) } autocomplete="off"/>
                <div className="register_form_placeholder register_form_placeholder_password" ref={passwordRef} >
                    <BiKey/>
                    <label htmlFor="password">Contraseña</label>
                </div>
                <input type="password" className="register_form_input" name="password" id="password" onChange={(e) => onChange(e) }/>
                <div className="register_form_placeholder register_form_placeholder_password" ref={confirmPasswordRef}>
                    <BiKey/>
                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                </div>
                <input type="password" className="register_form_input" name="confirmPassword" id="confirmPassword" onChange={(e) => onChange(e) }/>
                <span className="register_form_link">¿Ya tienes una cuenta?<Link to="/"><a>Inicia Sesión</a></Link></span>
                <input type="submit" value="Registrarse" className="register_form_submit"/>
            </form>
        </section>
    )
}


export default Register;