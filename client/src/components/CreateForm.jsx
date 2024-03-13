import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateForm = () => {
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://users-platform-api.onrender.com/create",
        {
          nome,
          sobrenome,
          endereco,
          cep,
          rua,
          cidade,
          uf,
          bairro,
          numero,
          complemento,
          profissao,
        }
      );
      console.log("Usuario criado com sucesso", response.data);

      setTimeout(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error ao criar usuario", error);
    }
  };

  return (
    <form action="">
      <div className="flex flex-col mb-3 ">
        <span className="font-[500] text-[18px] mb-1">Nome</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Sobrenome</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu sobrenome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Endereço</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu endereço"
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">CEP</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="number"
          placeholder="Escreva seu CEP"
          onChange={(e) => setCep(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Rua</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva sua rua"
          onChange={(e) => setRua(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Cidade</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva sua cidade"
          onChange={(e) => setCidade(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">UF</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu UF"
          onChange={(e) => setUf(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Bairro</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu bairro"
          onChange={(e) => setBairro(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Numero</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="number"
          placeholder="Escreva seu numero"
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Complemento</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva seu complemento"
          onChange={(e) => setComplemento(e.target.value)}
        />
      </div>

      <div className="flex flex-col mb-3">
        <span className="font-[500] text-[18px] mb-1">Profissão</span>
        <input
          className="w-full h-[40px] rounded-md font-[500] text-[16px] px-2 border"
          type="text"
          placeholder="Escreva sua profissão"
          onChange={(e) => setProfissao(e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-10">
        <button
          onClick={handleSubmit}
          className="w-[100px] h-[40px] bg-zinc-800 hover:bg-zinc-600 text-white rounded-md"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
