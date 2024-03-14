import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const UserPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://users-platform-api.onrender.com/users/${id}`
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao obter usuarios:", error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <NavBar />
      <h1 className="text-[20px] font-[600] text-zinc-700 underline mt-5">
        {users ? users.nome : "..."}
      </h1>

      <div className="w-full max-w-[550px] h-[700px] p-5 px-8 mt-10 rounded-md shadow-md border overflow-y-scroll">
        <div className="flex flex-col mb-3 ">
          <span className="font-[500] text-[18px] mb-1">Nome</span>
          <span>{users ? users.nome : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Sobrenome</span>
          <span>{users ? users.sobrenome : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Endereço</span>
          <span>{users ? users.endereco : ""}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">CEP</span>
          <span>{users ? users.cep : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Rua</span>
          <span>{users ? users.rua : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Cidade</span>
          <span>{users ? users.cidade : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">UF</span>
          <span>{users ? users.uf : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Bairro</span>
          <span>{users ? users.bairro : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Numero</span>
          <span>{users ? users.numero : "..."}</span>
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Complemento</span>
          <span>{users ? users.complemento : "..."}</span>
        </div>

        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Profissão</span>
          <span>{users ? users.profissao : "..."}</span>
        </div>

        <div className="flex justify-end mt-10">
          <button
            onClick={() => navigate(`/usuario/edit/${users._id}`)}
            className="w-[100px] h-[40px] bg-zinc-800 hover:bg-zinc-600 text-white rounded-md"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
