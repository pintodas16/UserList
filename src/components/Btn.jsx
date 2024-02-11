function Button({ children, handleBtn, extraClass }) {
  const style = extraClass ? extraClass : "";

  return (
    <a
      href=""
      className={`${style}  px-6 py-2 bg-sky-600 border border-bg-red-400 rounded-lg text-xl font-bold text-center text-gray-100 hover:bg-white hover:border-sky-600 hover:text-sky-600 `}
      onClick={handleBtn}
    >
      {children}
    </a>
  );
}

export default Button;
