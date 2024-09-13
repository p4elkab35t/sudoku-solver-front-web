import './CheckButton.css';
import React from 'react';

interface CheckButtonProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const CheckButton: React.FC<CheckButtonProps> = ({ onClick }) => {
  return (
    <input
      type="button"
      onClick={onClick}
      className='checkButton'
      value={'Solve'}
    />
  );
}

export default CheckButton;