import { Link } from "react-router-dom";
import registerImg from "../../../assets/logout.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="hero py-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={registerImg} alt="Login Image" className="h-[400px]" />
        </div>
        {/* Form */}
        <div className="card w-full max-w-sm shadow-2xl">
          <form className="card-body">
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
            <div className="mt-2 text-gray-500">
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
