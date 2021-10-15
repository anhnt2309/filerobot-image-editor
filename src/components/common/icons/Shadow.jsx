/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Shadow = ({ color, ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.58325 0.583374C1.03097 0.583374 0.583252 1.03109 0.583252 1.58337V14.5834C0.583252 15.1357 1.03097 15.5834 1.58325 15.5834H3.4166V17.9167C3.4166 18.7451 4.08817 19.4167 4.9166 19.4167H17.9166C18.745 19.4167 19.4166 18.7451 19.4166 17.9167V4.91669C19.4166 4.08826 18.745 3.41669 17.9166 3.41669H15.5833V1.58337C15.5833 1.03109 15.1355 0.583374 14.5833 0.583374H1.58325ZM14.5833 1.58337H1.58325L1.58325 14.5834H14.5833V1.58337ZM6.69061 15.5834L4.4166 17.8984V15.5834H6.69061ZM5.00533 18.4167L7.78841 15.5834H11.8211L8.98778 18.4167H5.00533ZM9.60061 18.4167H9.55347L12.3868 15.5834H12.4339L9.60061 18.4167ZM10.1663 18.4167H14.1172L18.4166 14.0536V10.0083L15.5833 12.9297V14.5834C15.5833 15.1357 15.1355 15.5834 14.5833 15.5834H12.9964C12.9875 15.5944 12.9779 15.6051 12.9677 15.6153L10.1663 18.4167ZM18.4166 8.94063L15.5833 11.862V7.96429L18.4166 5.13353V8.94063ZM15.2124 18.4167H17.9166C18.1927 18.4167 18.4166 18.1928 18.4166 17.9167V15.165L15.2124 18.4167ZM18.3184 4.61908C18.3251 4.62814 18.3316 4.63744 18.3377 4.64696L15.5833 7.39886V7.35174L18.3184 4.61908ZM17.9537 4.41804C17.9414 4.41714 17.9291 4.41669 17.9166 4.41669H15.5833V6.78631L17.9537 4.41804Z"
      fill="currentColor"
    />
  </svg>
);

Shadow.defaultProps = {
  color: '#5D6D7E',
};

Shadow.propTypes = {
  color: PropTypes.string,
};

export default Shadow;
