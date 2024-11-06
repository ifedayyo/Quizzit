import "./App.css";
export default function SignIn() {
  return (
    <div>
      <form className="form-styling">
        <input
          type="text"
          id="fname"
          className="input-styling"
          name="fname"
          placeholder="Name:"
          required
        />

        <input
          type="password"
          id="email"
          className="input-styling"
          name="email"
          placeholder="Enter your password"
          required
        />
        <button className="button-styling">SUBMIT</button>
      </form>
    </div>
  );
}
