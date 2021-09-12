import React from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import Contacts from "./Components/Contacts/Contacts";

export default class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  Contacts = () => {
    return this.state.contacts.map((contact) => {
      return (
        <div key={contact.id}>
          {contact.name} : {contact.number}
        </div>
      );
    });
  };

  formSubmitHandler = (data) => {
    console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa", data);

    const findName = this.state.contacts.find((contact) => {
      return contact.name === data.name;
    });
    !findName
      ? this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contact`);
  };

  HandleInputName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (data) => {
    return this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== data.id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />
        <h1>Contacts</h1>
        <Contacts
          visibleContacts={this.visibleContacts()}
          deleteContact={this.deleteContact}
        />

        <Filter
          filter={this.state.filter}
          HandleInputName={this.HandleInputName}
        />
      </>
    );
  }
}
