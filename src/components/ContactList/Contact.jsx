import s from "./Contact.module.css";
import { DiAndroid } from "react-icons/di";
import { IoCallSharp } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";

const Contact = ({ contact }) => {
  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <li className={s.form} key={contact.id}>
      <div className={s.contact}>
        <IoAccessibility />
        {contact.name}
        <IoCallSharp />
        {contact.number}
      </div>
      <div>
        <button
          className={s.buttonDel}
          onClick={() => handleDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
