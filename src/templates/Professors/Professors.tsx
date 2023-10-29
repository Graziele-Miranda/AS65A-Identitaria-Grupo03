"use client";
import icAdd from "../../assets/add.svg";
import TableRow from "../../components/TableRow";
import "./Professors.css";
import Image from "next/image";
import { useEffect } from "react";
import { GetCompanyList } from "../../services/empresas";

function ProfessorsTemplate() {
  const rows = [
    {
      id: "1",
      nome: "Teste",
      email: "teste@gmail.com",
      telefone: "(43) 99999-9999",
      createdAt: JSON.stringify(new Date()),
    },
    {
      id: "2",
      nome: "Teste",
      email: "teste@gmail.com",
      telefone: "(43) 99999-9999",
      createdAt: JSON.stringify(new Date()),
    },
    {
      id: "3",
      nome: "Teste",
      email: "teste@gmail.com",
      telefone: "(43) 99999-9999",
      createdAt: JSON.stringify(new Date()),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const temp = await GetCompanyList(1);
    };
    fetchData();
  }, []);

  return (
    <section id="users">
      <div className="vl_title">
        <div>
          <h2>Voluntários</h2>
          <p style={{ opacity: 0.6 }}>Listagem de voluntários</p>
        </div>
        <button className="rounded-btn">
          <Image src={icAdd} alt="" />
        </button>
      </div>
      <div className="vl_div_table">
        <table className="vl-table">
          <thead style={{ backgroundColor: "rgb(251 200 200)" }}>
            <th style={{ borderRadius: "5px 0px 0px 0px" }}>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Data</th>
            <th
              style={{ borderRadius: "0px 5px 0px 0px", textAlign: "center" }}
            >
              Ações
            </th>
          </thead>
          <tbody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  id={row.id}
                  name={row.nome}
                  email={row.email}
                  createdAt={row.createdAt}
                  phone={row.telefone}
                />
              );
            })}
          </tbody>
        </table>
        <div className="div-pagination">
          <button className="rounded-btn mini">{"<"}</button>
          <button className="rounded-btn mini">{1}</button>
          <button className="rounded-btn mini">{2}</button>
          <button className="rounded-btn mini">{3}</button>
          <button className="rounded-btn mini" disabled>
            . . .
          </button>
          <button className="rounded-btn mini">{10}</button>
          <button className="rounded-btn mini">{">"}</button>
        </div>
      </div>
    </section>
  );
}

export default ProfessorsTemplate;