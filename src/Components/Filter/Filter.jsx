const Filter = ({ filter, HandleInputName }) => {
  return (
    <label>
      Find contacts by name:
      <input
        onChange={HandleInputName}
        type="text"
        value={filter}
        name="filter"
        placeholder="find name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

export default Filter;
