import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";

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

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  formSubmitHandler = (data) => {
    const findName = this.state.contacts.find((contact) => {
      return contact.name === data.name;
    });
    !findName
      ? this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contact`);
  };

  handleInputName = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleInputName={this.HandleInputName}
        />
        <ContactsList
          contacts={this.visibleContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
