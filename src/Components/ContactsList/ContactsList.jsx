function Contacts({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => deleteContact(contact)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
