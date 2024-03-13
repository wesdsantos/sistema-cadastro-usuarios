import CreateForm from "../components/CreateForm";
import NavBar from "../components/NavBar";

const CreateUser = () => {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <NavBar />
      <h1 className="text-[20px] font-[600] text-zinc-700 underline mt-5">
        Criar Usuarios
      </h1>

      <div className="w-full max-w-[550px] h-[700px] p-5 px-8 mt-10 rounded-md shadow-md border overflow-y-scroll">
        <CreateForm />
      </div>
    </div>
  );
};

export default CreateUser;
