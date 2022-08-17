import React from 'react';

/**
 * Render a alert message in screen
 * @param {object} params
 * @param {'DANGER'| 'SUCCESS'} params.type Type of alert
 * @param {string} params.message Message to show in alert
 */
const Alert = ({ type, message }) => {
  return (
    <div
      className={`alert ${
        type === 'DANGER' ? 'alert-danger' : ' alert-success'
      } alert-dismissible fade show`}
      role='alert'
    >
      {message}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
      ></button>
    </div>
  );
};

export default Alert;
