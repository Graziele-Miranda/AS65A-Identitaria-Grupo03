"use client";
import { useRouter } from "next/navigation";
import icAdd from "../../assets/add.svg";
import TableRow from "../../components/TableRow";
import "./Professors.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DeleteProfessor, GetProfessorList } from "../../services/professores";
import { getUserAuth } from "../../utils/storages";

function ProfessorsTemplate() {
  const navigate = useRouter();
  const [professors, setUsers] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<any>([1]);

  const handleChangePage = async (e) => {
    setPage(e);
    if (!!document) {
      const pagesBtns = document.getElementsByClassName("page-btn");
      for (let index = 0; index < pagesBtns.length; index++) {
        pagesBtns[index].classList.remove("active");
      }
      pagesBtns[e - 1].classList.add("active");
    }
    const temp = await GetProfessorList(e);
    setUsers(temp.data);
  };

  const handleDelete = async (e) => {
    await DeleteProfessor(e)
    const temp = await GetProfessorList(1);
    setUsers(temp.data);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!getUserAuth()) {
        navigate.push('/')
        return;
      }

      const temp = await GetProfessorList(page);
      setUsers(temp.data);
      setTotal(Math.round(temp.total / 10));

      const tempPages = [];
      for (let index = 1; index < temp.total / 10; index++) {
        tempPages.push(index);
      }
      console.log(tempPages);
      setTotalPages(tempPages);
    };
    fetchData();
  }, []);

  return (
    <>
      <title>Professores</title>
      <section id="professors">
        <div className="vl_title">
          <div>
            <h2>Professores</h2>
            <p style={{ opacity: 0.6 }}>Listagem de professores</p>
          </div>
          <button className="rounded-btn">
            <Image src={icAdd} alt="" />
          </button>
        </div>
        <div className="vl_div_table">
          <table className="vl-table">
            <thead style={{ backgroundColor: "rgb(251 200 200)" }}>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              {professors.map((row: any) => {
                return (
                  <TableRow
                    key={row.id}
                    id={row.id}
                    name={row.nome}
                    email={row.email}
                    createdAt={row.createdAt}
                    phone={row.telefone}
                    onDelete={() => handleDelete(row.id)}
                    onEdit={() => console.log('editar')}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="div-pagination">
            <button
              className="rounded-btn mini"
              disabled={page == 1}
              onClick={(e) => handleChangePage(page - 1)}
            >
              {"<"}
            </button>
            {totalPages.map((a) => {
              return (
                <button
                  className={`rounded-btn mini page-btn ${a == 1 ? 'active' : ''}`}
                  key={a}
                  value={a}
                  onClick={(e: any) => handleChangePage(e.target.value)}
                >
                  {a}
                </button>
              );
            })}
            {total > 1 && (
              <>
                <button
                  style={{ opacity: 1 }}
                  className="rounded-btn mini"
                  disabled
                >
                  . . .
                </button>

                <button
                  value={total}
                  className="rounded-btn mini page-btn"
                  onClick={(e: any) => handleChangePage(e.target.value)}
                >
                  {total}
                </button>
              </>
            )}
            <button
              className="rounded-btn mini"
              disabled={page == total}
              onClick={() => handleChangePage(page + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfessorsTemplate;
