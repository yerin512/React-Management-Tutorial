import React from 'react';

export default function InputFiled({
    type,
    value,
    placeholder,
    onChange,
    errorMessage
}) {
    return (
        <React.Fragment>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} /><br />
            <div style={{ color: 'red' }}>{errorMessage}</div>
        </React.Fragment>
    )
}