import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";

const Login = () => {

    const  {signInUser}  = useContext(AuthContext)
    const navigate = useNavigate()
        const handleFormSubmit = (e) => {
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name, email, password);
            signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/")
            })
            .catch(error => {
                console.log(error.message);
            })
    
    
        }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login Now!</h1>
                <p className="py-6">
                    National Life Insurance Company Limited. If you not Register,please Register now</p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleFormSubmit} className="card-body">
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p>if You new, please <Link to={"/register"}><span>Register</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;