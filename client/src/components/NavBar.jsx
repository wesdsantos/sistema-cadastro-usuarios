import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[60px] flex items-center justify-between px-8 text-white font-[600] text-[18px] bg-zinc-800">
      <span
        onClick={() => navigate("/")}
        className="text-zinc-200 text-[20px] cursor-pointer font-sans"
      >
        Users<span className="text-orange-500">App</span>
      </span>

      <div className="flex items-center gap-7">
        <span
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/usuarios")}
        >
          Usuarios
        </span>
        <span
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/criar")}
        >
          Criar
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
