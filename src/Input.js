

function Input({ name, onChange, isCorrect, title, placeholder  }) {

    return (
        <div>
          <label htmlFor={name}>{title}: </label>
          <input type={name} onChange={onChange} placeholder={placeholder} name={name} />

          {isCorrect || <div>You format is incorrect</div>}
        </div>
    )
}

export default Input;
