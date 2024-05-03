import s from "./ContactForm.module.css";
import { useId } from "react";
// import { useState } from "react";

const ContactForm = ({ contacts, setContacts }) => {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    console.log(name.value);
    const number = event.target.elements.number.value;
    const newContact = { id, name, number };

    setContacts([...contacts, newContact]);
    event.target.reset();
  };

  console.log(contacts);
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="nameId">{"Name"}</label>
      <input
        type="text"
        name="name"
        value={contacts.name}
        id="nameId"
        autoComplete="false"
      />

      <label htmlFor="numberId">{"Number"}</label>
      <input
        type="number"
        name="number"
        value={contacts.number}
        id="numberId"
        autoComplete="false"
      />

      <button onClick={() => {}}>Add contact</button>
    </form>
  );
};

export default ContactForm;
