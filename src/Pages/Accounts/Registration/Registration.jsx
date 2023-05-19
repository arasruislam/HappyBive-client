import { Link } from "react-router-dom";
import registerImg from "../../../assets/logout.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import app from "../../../firebase/firebase.config";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth(app);

const Registration = () => {
  const { registerUser } = useContext(AuthContext);

  /* Registration Form */
  const registerUserHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { name, photoURL, email, password };
    console.log(newUser);

    /* Register function */
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          photoURL: photoURL,
        })
          .then()
          .catch((error) => console.log(error));

        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero py-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={registerImg} alt="Login Image" className="h-[400px]" />
        </div>
        {/* Form */}
        <div className="card w-full max-w-sm shadow-2xl">
          <form onSubmit={registerUserHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B1D22F] accountLogin">
                Register Now
              </button>
            </div>

            {/* don't have an account */}
            <div className="mt-2 text-gray-500 text-sm">
              Already have an account!{" "}
              <Link
                to="/login"
                className="hover:text-green-500 hover:underline font-semibold "
              >
                Login
              </Link>
            </div>

            {/* Social Login Buttons */}
            <div>
              <div className="divider">OR</div>
              <div className="flex gap-4 justify-center">
                <button>
                  <FaFacebook className="h-6 w-6" />
                </button>
                <button>
                  <FaGoogle className="h-6 w-6" />
                </button>
                <button>
                  <FaGithub className="h-6 w-6" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
