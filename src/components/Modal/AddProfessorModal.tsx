import React, { useState, useEffect } from "react";
import "../Modal/AddProfessorModal.css";

interface AddProfessorModalProps {
  closeModal: () => void;
  editingProfessor: any;
  isEdit?: boolean;
}

const AddProfessorModal: React.FC<AddProfessorModalProps> = ({
  closeModal,
  editingProfessor,
  isEdit,
}) => {
  const [formData, setFormData] = useState({
    nome: "",
    login: "",
    senha: "",
    cpf: "",
    idade: "",
    rua: "",
    cidade: "",
    telefone: "",
    email: "",
    curso: "",
    apoiador: false,
    voluntario: false,
  });

  useEffect(() => {
    if (isEdit && editingProfessor) {
      setFormData({
        nome: editingProfessor.nome || "",
        login: editingProfessor.login || "",
        senha: editingProfessor.senha || "",
        cpf: editingProfessor.cpf || "",
        idade: editingProfessor.idade || "",
        rua: editingProfessor.rua || "",
        cidade: editingProfessor.cidade || "",
        telefone: editingProfessor.telefone || "",
        email: editingProfessor.email || "",
        curso: editingProfessor.curso || "",
        apoiador: editingProfessor.apoiador || false,
        voluntario: editingProfessor.voluntario || false,
      });
    }
  }, [isEdit, editingProfessor]);

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
        <h2>{isEdit ? "Editar Professor" : "Cadastro de Professores"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
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
              CPF:
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="input-row">
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
          </div>
          <div className="input-row">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
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
          </div>

          <div className="input-row">
            <label>
              Idade:
              <input
                type="text"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Curso:
              <input
                type="text"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-row">
            <label>
              Usuário:
              <input
                type="text"
                name="login"
                value={formData.login}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Senha:
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </label>
          </div>
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
          <button type="submit">{isEdit ? "Salvar" : "Cadastrar"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddProfessorModal;