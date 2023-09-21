import React from 'react';
import PropTypes from 'prop-types';
import { StyledBtn, StyledList } from './Feedback.styled';

export const FeedBack = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <StyledList>
        {options.map(option => {
          return (
            <li key={option}>
              <StyledBtn onClick={() => onLeaveFeedback(option)}>
                {' '}
                {option}
              </StyledBtn>
            </li>
          );
        })}
      </StyledList>
    </>
  );
};
FeedBack.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
