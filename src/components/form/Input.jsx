function Input({ label, type, name, error, accept, value, onChange }) {
  const inputStyle = `w-full outline-none focus:outline-none border border-sky-600 rounded-md px-2 md:px-4 ${
    error?.isError ? "py-1" : ""
  } py-1.5 font-medium`;
  // console.log(error);
  const commonProps = {
    type,
    name,
    value,
    onChange,
    placeholder: `Enter your ${label}..`,
    className: inputStyle,
    accept: accept ? accept : "",
  };

  return (
    <div className="">
      {label && (
        <label
          className={`block font-semibold text-md ${
            error?.isError ? "md:text-md" : "md:text-lg"
          }  capitalize`}
          htmlFor=""
        >
          {label}
        </label>
      )}
      {/* <input {...commonProps} />
      {error[name] ? <div className="text-red-700">{error[name]}</div> : ""} */}
      {type === "text" && <input {...commonProps} />}
      {type === "text" && error[name] ? (
        <div className="text-red-700">{error[name]}</div>
      ) : (
        ""
      )}
      {type === "email" && <input {...commonProps} />}
      {type === "email" && error[name] ? (
        <div className="text-red-700">{error[name]}</div>
      ) : (
        ""
      )}
      {type === "file" && <input {...commonProps} />}
      {type === "file" && error[name] ? (
        <div className="text-red-700">{error[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
}
export default Input;
