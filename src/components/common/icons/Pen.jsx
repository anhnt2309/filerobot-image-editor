/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Pen = ({ color, ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <path
      d="M14.7847 12.0153H10.8385C9.96045 12.0153 9.24623 12.7296 9.24623 13.6076C9.24623 14.0275 8.90455 14.3692 8.48466 14.3692H2.39241C1.9724 14.3692 1.63083 14.0275 1.63083 13.6076V13.0531C1.63083 12.6334 1.97229 12.2918 2.39197 12.2916L3.48983 12.2911C3.49016 12.2911 3.4906 12.291 3.49093 12.291C3.50345 12.291 3.51598 12.2902 3.52861 12.2891C3.53378 12.2886 3.53883 12.2878 3.54399 12.2871C3.54938 12.2863 3.55487 12.2859 3.56025 12.285L6.49196 11.7793C6.49349 11.779 6.49492 11.7786 6.49635 11.7783C6.50096 11.7774 6.50547 11.7764 6.50997 11.7755C6.51733 11.7738 6.52458 11.7722 6.53173 11.7701C6.53678 11.7688 6.54183 11.7672 6.54689 11.7657C6.55359 11.7635 6.56029 11.7612 6.56699 11.7586C6.57183 11.7568 6.57677 11.7551 6.5816 11.7532C6.59193 11.7488 6.60204 11.7441 6.61204 11.739C6.61599 11.7369 6.61995 11.7345 6.6239 11.7323C6.63093 11.7283 6.63785 11.7244 6.64467 11.72C6.64884 11.7173 6.65302 11.7145 6.65719 11.7116C6.66378 11.707 6.67037 11.7022 6.67675 11.6971C6.68015 11.6945 6.68367 11.6918 6.68707 11.689C6.69674 11.681 6.70619 11.6726 6.71509 11.6636L14.1194 4.25904C14.7132 3.66521 14.7132 2.69891 14.1194 2.10497L13.2599 1.24547C12.6661 0.651521 11.6997 0.651631 11.1059 1.24547L3.70165 8.65004C3.69264 8.65893 3.68429 8.66849 3.67616 8.67816C3.67341 8.68146 3.67078 8.68486 3.66814 8.68827C3.66309 8.69475 3.65825 8.70134 3.65364 8.70805C3.65078 8.71211 3.64792 8.71629 3.64529 8.72046C3.641 8.72716 3.63705 8.73397 3.6332 8.7409C3.63068 8.7454 3.62804 8.74991 3.62562 8.75441C3.62079 8.76397 3.61639 8.77353 3.61222 8.78342C3.61013 8.78836 3.60837 8.79352 3.6064 8.79858C3.60409 8.80495 3.60178 8.81143 3.59969 8.81791C3.59805 8.82319 3.59651 8.82846 3.59508 8.83373C3.59321 8.84055 3.59156 8.84747 3.59003 8.8545C3.58893 8.85933 3.58783 8.86417 3.58695 8.869C3.58662 8.87043 3.58629 8.87175 3.58607 8.87307L3.1397 11.4605L2.39153 11.4608C1.51394 11.4612 0.800049 12.1756 0.800049 13.0531V13.6076C0.800049 14.4857 1.51438 15.2 2.39241 15.2H8.48466C9.36268 15.2 10.077 14.4857 10.077 13.6076C10.077 13.1877 10.4186 12.846 10.8385 12.846H14.7847C15.014 12.846 15.2 12.6601 15.2 12.4307C15.2 12.2012 15.014 12.0153 14.7847 12.0153ZM4.26843 9.80431L5.56086 11.0968L3.99905 11.3662L4.26843 9.80431ZM10.4644 3.06181L11.09 3.6874L5.20831 9.5693L4.58275 8.94371L10.4644 3.06181ZM6.42131 10.7824L5.79575 10.1568L11.6775 4.27486L12.3031 4.90045L6.42131 10.7824ZM11.6933 1.83282C11.9633 1.56299 12.4024 1.56299 12.6724 1.83282L13.5319 2.69243C13.8018 2.96238 13.8018 3.40163 13.5319 3.67158L12.8904 4.3131L11.0518 2.47434L11.6933 1.83282Z"
      fill="currentColor"
    />
  </svg>
);

Pen.defaultProps = {
  color: '#5D6D7E',
};

Pen.propTypes = {
  color: PropTypes.string,
};

export default Pen;
