import icEdit from "../../assets/edit.svg";
import icDelete from "../../assets/delete.svg";
import "./TableRow.css";
import Image from "next/image";
import formateDate from "../../utils/formateDate";

function TableRow({ id, name, email, phone, createdAt, onDelete, onEdit }: any) {

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td style={{ width: "160px" }}>{phone}</td>
      <td style={{ width: "200px" }}>{formateDate(new Date(createdAt))}</td>
      <td style={{ width: "112px" }}>
        <div className="actions-div">
          <button className="rounded-btn" onClick={() => {
            return onEdit();
          }}>
            <Image src={icEdit} alt="" />
          </button>
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

export default TableRow;
