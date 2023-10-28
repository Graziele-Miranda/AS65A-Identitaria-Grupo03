"use client"
import icEdit from "../../assets/edit.svg";
import icDelete from "../../assets/delete.svg";
import "./TableRowUser.css";
import Image from "next/image";
import formateDate from "../../utils/formateDate";
import Link from "next/link";

function TableRowUser({ id, name, email, phone, createdAt, onDelete }: any) {

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td style={{ width: "160px" }}>{phone}</td>
      <td style={{ width: "200px" }}>{formateDate(new Date(createdAt))}</td>
      <td style={{ width: "112px" }}>
        <div className="actions-div">
          <Link href={`user/${id}`}>
            <button className="rounded-btn">
              <Image src={icEdit} alt="" />
            </button>
          </Link>
          <button
            className="rounded-btn"
            onClick={() => {
              return onDelete();
            }}
          >
            <Image src={icDelete} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRowUser;
