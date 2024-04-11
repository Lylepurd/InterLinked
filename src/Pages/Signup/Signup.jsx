import { Link } from "react-router-dom";
import "./Signup.css";

export function Signup() {

  return(
    <div className="signup-form text-center signup">
      <h1>SignUp</h1>
      <form>
        <div class="mb-3 first-label">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">SignUp</button>
        {/* <Link to={"/login"} className="btn btn-primary linktag">LogIn</Link> */}
        <p>Already have an account <a href="/login">Login</a></p>
      </form>
    </div>
    
  )
}