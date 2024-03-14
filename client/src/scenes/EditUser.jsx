import NavBar from "../components/NavBar";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState({
    nome: "",
    sobrenome: "",
    endereco: "",
    cep: "",
    rua: "",
    cidade: "",
    uf: "",
    bairro: "",
    numero: "",
    complemento: "",
    profissao: "",
  });

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

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [profissao, setProfissao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://users-platform-api.onrender.com/update/${users._id}`,
        {
          nome: nome === "" ? users.nome : nome,
          sobrenome: sobrenome === "" ? users.sobrenome : sobrenome,
          endereco: endereco === "" ? users.endereco : endereco,
          cep: cep === "" ? users.cep : cep,
          rua: rua === "" ? users.rua : rua,
          cidade: cidade === "" ? users.cidade : cidade,
          uf: uf === "" ? users.uf : uf,
          bairro: bairro === "" ? users.bairro : bairro,
          numero: numero === "" ? users.numero : numero,
          complemento: complemento === "" ? users.complemento : complemento,
          profissao: profissao === "" ? users.profissao : profissao,
        }
      );
      console.log("Usuario criado com sucesso", response.data);

      setTimeout(() => {
        navigate(`/usuario/${users._id}`);
      });
    } catch (error) {
      console.error("Error ao criar usuario", error);
    }
  };

  return (
    <div className="w-full min-h-screen h-auto flex flex-col items-center">
      <NavBar />
      <h1 className="text-[20px] font-[600] text-zinc-700 underline mt-5">
        Editar Usuario
      </h1>

      <div className="w-full max-w-[550px] h-[700px] p-5 px-8 mt-10 rounded-md shadow-md border overflow-y-scroll">
        <div className="flex flex-col mb-3 ">
          <span className="font-[500] text-[18px] mb-1">Nome</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.nome : "..."}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Sobrenome</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder={users ? users.sobrenome : "..."}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Endereço</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.endereco : "..."}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">CEP</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="number"
            placeholder={users ? users.cep : "..."}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Rua</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.rua : "..."}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Cidade</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.cidade : "..."}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">UF</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.uf : "..."}
            onChange={(e) => setUf(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Bairro</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.bairro : "..."}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Numero</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="number"
            placeholder={users ? users.numero : "..."}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Complemento</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.complemento : "..."}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-3">
          <span className="font-[500] text-[18px] mb-1">Profissão</span>
          <input
            className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
            type="text"
            placeholder={users ? users.profissao : "..."}
            onChange={(e) => setProfissao(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-10">
          <button
            onClick={handleSubmit}
            className="w-[100px] h-[40px] bg-zinc-800 hover:bg-zinc-600 text-white rounded-md"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
