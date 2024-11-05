import "App/css";
export default function SignIn() {
  return (
    <div>
      <form className="form-styling">
        <input
          type="text"
          id="fname"
          className="input-styling"
          name="fname"
          placeholder="First name:"
          required
        />

        <input
          type="text"
          id="lname"
          className="input-styling"
          name="lname"
          placeholder="Last name"
          required
        />

        <input
          type="email"
          id="email"
          className="input-styling"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button className="button-styling">SUBMIT</button>
      </form>
    </div>
  );
}
