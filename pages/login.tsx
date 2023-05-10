const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center bg-white w-full max-w-lg h-full max-h-60 rounded-xl">
        <h1 className="bg-gradient-to-r from-custom-blue to-custom-purple text-transparent bg-clip-text text-center text-5xl my-8">
          To Do App
        </h1>
        <button className="bg-emerald-400 hover:bg-emerald-500 text-white text-lg py-4 px-8 rounded-xl mt-4">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
