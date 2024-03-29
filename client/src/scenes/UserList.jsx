import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://users-platform-api.onrender.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao obter usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://users-platform-api.onrender.com/delete/${id}`
      );
      console.log("Usuario deletado", response.data);

      setTimeout(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Erro ao deletar usuario:", error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-full max-w-[1200px] h-[800px] mt-5 flex flex-col items-center">
        <span className="mt-10 text-[25px] font-[700] text-zinc-700">
          Lista de Usuarios
        </span>
        <div className="w-full max-w-[550px] h-[700px] p-5 px-8 mt-10 rounded-md shadow-md border overflow-y-scroll">
          {users.map((user) => (
            <div
              key={user._id}
              className="w-full h-[100px] px-4 flex items-center justify-between mb-3 border "
            >
              <div>
                <span className="font-[500] underline">Nome:</span>
                <span className="font-[400] ml-2">{user.nome}</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/usuario/${user._id}`)}
                  className="w-[100px] h-[40px] rounded-md bg-zinc-700 text-white"
                >
                  Ver
                </button>

                <button
                  onClick={() => handleDelete(user._id)}
                  className="w-[100px] h-[40px] rounded-md bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
