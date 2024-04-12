import "./Signup.css";
import ParticlesBg from 'particles-bg'

export function Signup() {

  return(
    <>

      <ParticlesBg type="thick" bg={true} />

      <div className="signup-form text-center signup">
        <h1>SignUp</h1>
        <form>
          <div class="mb-3 first-label">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="unsername" class="form-label">Username</label>
            <input type="username" class="form-control" id="username" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <div class="mb-3">
            <label for="DOB" class="form-label">DOB</label>
            <input type="date" class="form-control" id="DOB" />
          </div>
          <button type="submit" class="btn btn-primary">SignUp</button>
          <p>Already have an account <a href="/login">Login</a></p>
        </form>
      </div>
    </>
  )
}