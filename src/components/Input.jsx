const Input = (props) => {
  const { title, placeholder, className } = props;

  return (
    <div className={`bg-white text-input-text rounded-sm px-3 py-1.5 ${className}`}>
      <div className="text-xs">{title}</div>
      <div className="text-base">{placeholder}</div>
    </div>
  )
};

export default Input;