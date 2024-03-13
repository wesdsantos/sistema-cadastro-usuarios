const NavBar = () => {
  return (
    <nav className="w-full h-[60px] flex items-center justify-between px-8 text-white font-[600] text-[18px] bg-zinc-800">
      <span className="text-zinc-200 text-[20px] font-sans">
        Users<span className="text-orange-500">App</span>
      </span>

      <div className="flex items-center gap-7">
        <span className="hover:underline">Usuarios</span>
        <span className="hover:underline">Criar</span>
      </div>
    </nav>
  );
};

export default NavBar;
