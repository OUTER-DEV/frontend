import React from 'react';

const Form = ({ onSubmit, buttonText, fields, buttonDisabled, customDiv  }) => {
  return (
    <>
    <form onSubmit={onSubmit} className="flex flex-col items-center justify-center min-h-screen">
      <div className="_mainContainer">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-cole">
            <label className="flex justify-center items-center h-full sm:w-10 _icon">
              {field.icon}
            </label>
            <input
              type={field.type}
              id={field.id}
              value={field.value}
              onChange={field.onChange}
              className="_input"
              placeholder={field.placeholder}
              maxLength={field.maxLength}
            />
          </div>
        ))}
        <button type="submit" className="_button" disabled={buttonDisabled}>
          {buttonText}
        </button>
      </div>
    </form>
    {customDiv &&<div>{customDiv}</div>}
    </>
  );
};

export default Form;