import Logo from "./../media/logo.png";
import {BiUser,BiKey} from "react-icons/bi";
import {Link} from "react-router-dom";
import {useState,useRef} from "react";

const Login = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [inputs,setInputs] = useState({
        email: "",
        password: ""
    })


    const onChange = (e) => {

        if(e.target.name === "email" && !(e.target.value.length === 0)){
            emailRef.current.classList.add("login_form_placeholder_active");
        }

        if(e.target.name === "email" && e.target.value.length === 0){
            emailRef.current.classList.remove("login_form_placeholder_active");
        }

        if(e.target.name === "password" && !(e.target.value.length === 0)){
            passwordRef.current.classList.add("login_form_placeholder_active_password");
        }

        if(e.target.name === "password" && e.target.value.length === 0){
            passwordRef.current.classList.remove("login_form_placeholder_active_password");
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
        <section className="login">
            <img src={Logo} className="login_image" alt="Drogueria Del Sol"/>
            <h1 className="login_title">Iniciar Sesión</h1>
            <form className="login_form" onSubmit={onSubmit}>
                <div className="login_form_placeholder" ref={emailRef} >
                    <label htmlFor="email">Email</label>
                    <BiUser/>
                </div>
                <input type="email" autocomplete="off" className="login_form_input" name="email" id="email" onChange={(e) => onChange(e)}/>
                <div className="login_form_placeholder login_form_placeholder_password" ref={passwordRef}>
                    <label htmlFor="password">Contraseña</label>
                    <BiKey/>
                </div>
                <input type="password" className="login_form_input" name="password" id="password" onChange={(e) => onChange(e) } autocomplete="off"/>
                <span className="login_form_link">¿No tienes una cuenta?<Link to="/register"><a>Registrate Ahora</a></Link></span>
                <input type="submit" value="Iniciar Sesión" className="login_form_submit"/>
                <Link to="/dashboard">dashboard previsory link</Link>
            </form>
        </section>
    )
}


export default Login;