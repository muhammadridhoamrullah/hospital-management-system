import { Link } from "react-router-dom";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../redux/loginSlice";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useDispatch();
  const { isLoggedIn, data, loading, error } = useSelector(
    (state) => state.login
  );
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      toast.success("Login Successful");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  function changeHandler(e) {
    const { name, value } = e.target;

    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (formLogin.email === "" || formLogin.password === "") {
      toast.error("Please fill in all fields");
    }
    console.log("jALAN");
    console.log(formLogin.email, "email");
    console.log(formLogin.password, "password");

    dispatch(doLogin(formLogin));
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="w-1/2 min-h-screen flex flex-col gap-4 justify-center items-center text-black">
      {/* Awal Form Login */}
      <div className="border border-gray-500/30 rounded-xl w-112.5 h-120 p-8 flex flex-col  justify-between items-start">
        {/* Awal Welcome Back & Login */}
        <div className="w-full h-fit  flex flex-col gap-2">
          <p className="text-2xl font-bold">Welcome Back</p>
          <p className="text-sm text-gray-500 font-semibold">
            Sign in to your hospital management account
          </p>
        </div>
        {/* Akhir Welcome Back & Login */}

        {/* Awal Form Login */}
        <form
          onSubmit={submitHandler}
          className="w-full h-fit flex flex-col gap-2 justify-start items-start"
        >
          {/* Awal Email Address */}
          <div className="w-full h-fit flex flex-col gap-2 justify-start items-start">
            {/* Awal Label Email */}
            <label className="font-semibold text-sm">Email Address</label>
            {/* Akhir Label Email */}
            {/* Awal Input Email */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="parkjihyo@gmail.com"
              className="w-full h-fit p-2 rounded-md border border-transparent outline-none bg-gray-300/50 focus:border focus:border-blue-600 transition-all duration-700 text-sm font-medium"
              onChange={changeHandler}
              value={formLogin.email}
            />
            {/* Akhir Input Email */}
          </div>
          {/* Akhir Email Address */}
          {/* Awal Password */}
          <div className="w-full h-fit flex flex-col gap-2 justify-start items-start">
            {/* Awal Label Password */}
            <label className="font-semibold text-sm">Password</label>
            {/* Akhir Label Password */}
            {/* Awal Input Password */}
            <div className="relative w-full h-fit">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="**********"
                className="w-full h-fit p-2 rounded-md border border-transparent outline-none bg-gray-300/50 focus:border focus:border-blue-600 transition-all duration-700 text-sm font-medium"
                onChange={changeHandler}
                value={formLogin.password}
              />

              {/* Awal Button Show Password */}
              <button
                type="button"
                onClick={togglePassword}
                className="absolute top-1/3 right-3  -translate-y-1/12 text-gray-600 hover:text-gray-900 transition-colors duration-1000 cursor-pointer"
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </button>
              {/* Akhir Button Show Password */}
            </div>
            {/* Akhir Input Password */}
            {/* Awal Forgot Password */}
            <Link
              to={"/forgot-password"}
              className="w-full h-fit text-xs font-semibold text-end text-gray-500 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
            {/* Akhir Forgot Password */}
          </div>
          {/* Akhir Password */}

          {/* Awal Button Login */}
          <button
            type="submit"
            className="w-full h-fit p-2 text-center font-semibold  rounded-md bg-green-800 hover:bg-green-950 cursor-pointer text-white transition-colors duration-500 mt-4"
          >
            Sign In
          </button>
          {/* Akhir Button Login */}
        </form>
        {/* Akhir Form Login */}

        {/* Awal Need Help */}
        <p className="w-full h-fit text-center text-sm font-medium text-gray-500">
          Need help?{" "}
          <Link to={"/it-support"} className="font-bold hover:text-blue-700">
            Contact IT Support
          </Link>
        </p>
        {/* Akhir Need Help */}
      </div>
      {/* Akhir Form Login */}

      {/* Awal Informasi */}
      <p className="text-xs text-gray-500 font-semibold">
        This system is for authorized hospital staff only. Unauthorized access
        is prohibited.
      </p>
      {/* Akhir Informasi */}
    </div>
  );
}
