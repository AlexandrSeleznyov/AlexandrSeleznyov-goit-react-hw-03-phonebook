import React from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

export default class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInput = (e) => {
    console.log(e.currentTarget.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();

    const newData = {
      name,
      number,
      id: uuidv4(),
    };
    this.props.formSubmitHandler(newData);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            onChange={this.handleInput}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="New contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number:
          <input
            onChange={this.handleInput}
            type="tel"
            value={this.state.number}
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}
