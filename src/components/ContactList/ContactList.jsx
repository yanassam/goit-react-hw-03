import s from "./ContactList.module.css";
import Contact from "./Contact";

const ContactList = ({ contacts, setContacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            // setContacts={setContacts}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
