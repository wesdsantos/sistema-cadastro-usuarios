import NavBar from "../components/NavBar";

const CreateUser = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <NavBar />
      <h1 className="text-[20px] font-[600] text-zinc-700 underline mt-5">
        Criar Usuarios
      </h1>

      <div className="w-full max-w-[1200px] h-[500px] mt-10 border"></div>
    </div>
  );
};

export default CreateUser;
