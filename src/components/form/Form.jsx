function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} action="">
      {children}
    </form>
  );
}
export default Form;
