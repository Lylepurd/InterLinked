import "./Login.css";
import ParticlesBg from 'particles-bg';

export function Login() {

  return(
    <>
      <ParticlesBg type="thick" bg={true} />

      <div className="signup-form text-center signup">
        <h1> <a className="admin" href="/home">Login</a></h1>
        <form><div class="mb-3">
            <label for="unsername" class="form-label">Username</label>
            <input type="username" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <p>Dont have an account <a href="/signup">SignUp</a></p>
        </form>
      </div>
    </>
  )
}