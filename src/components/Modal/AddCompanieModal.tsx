import React, { useState } from "react";
import "../Modal/AddCompanieModal.css";
import "./AddCompanieModal.css";

interface AddCompanieModalProps {
  closeModal: () => void;
}

const AddCompanieModal: React.FC<AddCompanieModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    rua: "",
    cidade: "",
    telefone: "",
    email: "",
    apoiador: false,
    voluntario: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>Cadastro de Empresas</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            CNPJ:
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Rua:
            <input
              type="text"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefone:
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <div className="checkbox-group">
      <label>
        Apoiador:
        <input
          type="checkbox"
          name="apoiador"
          checked={formData.apoiador}
          onChange={handleChange}
        />
      </label>
      <label>
        Voluntário:
        <input
          type="checkbox"
          name="voluntario"
          checked={formData.voluntario}
          onChange={handleChange}
        />
      </label>
    </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanieModal;
