import s from "./SearchBox.module.css";
const SearchBox = () => {
  return (
    <form className={s.form}>
      <label htmlFor="findId">Find contacts by name</label>
      <input type="text" name="find" id="findId" />
    </form>
  );
};

export default SearchBox;
