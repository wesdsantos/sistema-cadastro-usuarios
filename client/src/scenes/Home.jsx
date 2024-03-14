import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-full max-w-[1200px] h-[500px] mt-10 flex justify-center">
        <span className="mt-10 text-[30px] font-[700] text-zinc-700">
          Bem-vindo !!!
        </span>
      </div>
    </div>
  );
};

export default Home;
