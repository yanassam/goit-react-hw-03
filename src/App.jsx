import { useState } from "react";
import { Formik } from "formik";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  // const [count, setCount] = useState(0);
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <SearchBox />
      <ContactList contacts={contacts} setContacts={setContacts} />
    </>
  );
}

export default App;
