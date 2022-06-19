import React from 'react';
import propTypes from 'prop-types';
import s from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element,
};
export default Section;
