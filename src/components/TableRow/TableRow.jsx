import icEdit from "../../assets/edit.svg";
import icDelete from "../../assets/delete.svg";
import "./TableRow.css";
import Image from "next/image";

function TableRow({ id, name, email, phone, createdAt }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td style={{ width: "160px" }}>{phone}</td>
      <td style={{ width: "200px" }}>{createdAt}</td>
      <td style={{ width: "112px" }}>
        <div className="actions-div">
          <button className="rounded-btn">
            <Image src={icEdit} alt="" />
          </button>
          <button className="rounded-btn">
            <Image src={icDelete} alt="" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
