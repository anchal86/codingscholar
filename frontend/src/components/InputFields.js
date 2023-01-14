
const InputFields = ({ className,value, label,placeholder, type,dataTransfer,autofocus,mandatory}) => (
  
    <div className={`form-group my-2  ${className}`}>
        <label htmlFor='InputFields' className="mb-2">{label} 
        <span className="text-danger px-1 h4 m-0">{mandatory}</span>
        </label>
        <input 
          className={`form-control ${className}`}
          autoFocus={autofocus}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(val)=>dataTransfer(val.target.value)}
        />
    </div>
  );
  
  export default InputFields;