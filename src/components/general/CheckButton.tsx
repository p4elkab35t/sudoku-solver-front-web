import './CheckButton.css';
import React from 'react';

interface CheckButtonProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const CheckButton: React.FC<CheckButtonProps> = ({ onClick, isLoading }) => {
  return (
    <input
      type="button"
      onClick={onClick}
      className='checkButton'
      value={'Solve'}
      disabled={isLoading}
    />
  );
}

export default CheckButton;