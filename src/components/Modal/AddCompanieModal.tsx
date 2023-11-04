import React, { useState, useEffect } from "react";
import "../Modal/AddCompanieModal.css";
import "./AddCompanieModal.css";
import { CreateCompany, UpdateCompany } from "../../services/empresas";

interface AddCompanieModalProps {
  closeModal: () => void;
  editingCompanie: any;
  isEdit?: boolean;
}

const AddCompanieModal: React.FC<AddCompanieModalProps> = ({
  closeModal,
  editingCompanie,
  isEdit,
}) => {
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

  useEffect(() => {
    if (editingCompanie) {
      setFormData({
        nome: editingCompanie.nome || "",
        cnpj: editingCompanie.cnpj || "",
        rua: editingCompanie.rua || "",
        cidade: editingCompanie.cidade || "",
        telefone: editingCompanie.telefone || "",
        email: editingCompanie.email || "",
        apoiador: editingCompanie.apoiador || false,
        voluntario: editingCompanie.voluntario || false,
      });
    }
  }, [editingCompanie]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await UpdateCompany(editingCompanie.id, formData);
      } else {
        await CreateCompany(formData);
      }
    } catch (error) {
      console.error("Erro ao salvar empresa", error);
    }

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <h2>{isEdit ? "Editar Empresa" : "Cadastro de Empresas"}</h2>
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
          <button type="submit">{isEdit ? "Salvar" : "Cadastrar"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddCompanieModal;
