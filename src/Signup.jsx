export default function Signup() {
  return (
    <div>
      We are all humans, and sometimes we want to feel our brain cells firing
      rapidly shooting those damn guns, causing chaos and commotioon, scattering
      everywhere. Interestingly there is no bullets around. but the neurons keep
      firringgg. hahahahaha! I want to fire you like a neuron, just without
      bullet. hahahahaha. Don't mind the craziness above. Fire away, and sign up
      for our quizzes so you can get those neurons workkinggg. hahahahaha
      return.
      <>
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
      </>
    </div>
  );
}
