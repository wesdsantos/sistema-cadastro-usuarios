import NavBar from "../components/NavBar";

const UserList = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-full max-w-[1200px] h-[500px] mt-5 flex justify-center">
        <span className="mt-10 text-[25px] font-[700] text-zinc-700">
          Lista de Usuarios
        </span>
      </div>
    </div>
  );
};

export default UserList;
