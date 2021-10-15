/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ color, ...props }) => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.1571 6.35723C11.0407 6.35723 11.7571 5.64088 11.7571 4.75723C11.7571 3.87357 11.0407 3.15723 10.1571 3.15723C9.27342 3.15723 8.55708 3.87357 8.55708 4.75723C8.55708 5.64088 9.27342 6.35723 10.1571 6.35723ZM10.1571 5.55723C10.5989 5.55723 10.9571 5.19905 10.9571 4.75723C10.9571 4.3154 10.5989 3.95723 10.1571 3.95723C9.71525 3.95723 9.35708 4.3154 9.35708 4.75723C9.35708 5.19905 9.71525 5.55723 10.1571 5.55723Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.23995 5.47408C5.38699 5.46544 5.52688 5.53832 5.60406 5.66377L8.16664 9.82855L9.68748 8.45731C9.76996 8.38295 9.87964 8.34622 9.99027 8.35592C10.1009 8.36561 10.2025 8.42087 10.2708 8.50845L13.0303 12.048C13.1243 12.1685 13.1414 12.3321 13.0743 12.4694C13.0072 12.6068 12.8677 12.6939 12.7149 12.6939H2.28511C2.14856 12.6939 2.02145 12.6242 1.94797 12.5092C1.87448 12.3941 1.86479 12.2494 1.92225 12.1256L4.90053 5.70507C4.96251 5.57145 5.09291 5.48271 5.23995 5.47408ZM5.31292 6.71718L2.9116 11.8939H11.8958L9.90407 9.33919L8.34556 10.7444C8.25735 10.8239 8.13836 10.8601 8.0208 10.8432C7.90324 10.8263 7.79927 10.7581 7.73703 10.6569L5.31292 6.71718Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.300049 1.60005C0.300049 1.15822 0.658221 0.800049 1.10005 0.800049H13.9C14.3419 0.800049 14.7 1.15822 14.7 1.60005V14.4C14.7 14.8419 14.3419 15.2 13.9 15.2H1.10005C0.658221 15.2 0.300049 14.8419 0.300049 14.4V1.60005ZM1.10005 1.60005H13.9V14.4H1.10005V1.60005Z"
      fill="currentColor"
    />
  </svg>
);

Image.defaultProps = {
  color: '#5D6D7E',
};

Image.propTypes = {
  color: PropTypes.string,
};

export default Image;
