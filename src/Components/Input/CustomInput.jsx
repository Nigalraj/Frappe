import React from 'react';

const CustomInput = ({ label, type = 'text', placeholder, ariaLabel, className, name, value, onChange, required }) => {
    return (
        <div className={className}>
            <div className='fs-6'>{label}</div>
            <label className="input-group mb-2">
                <input
                    type={type}
                    className="form-control custom-input mt-2"
                    aria-label={ariaLabel}
                    placeholder={placeholder}
                    aria-describedby="basic-addon1"
                    name={name}  // Added name prop for form control
                    value={value}  // Added value prop to bind input with state
                    onChange={onChange}  // Added onChange prop for handling input changes
                    required={required}
                />
            </label>
        </div>
    );
};

export default CustomInput;
