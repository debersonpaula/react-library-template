import React from 'react';
import { makeStyle } from '../../styles/provider/makeStyle';

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const useStyles = makeStyle((theme) => ({
  button: {
    background: theme.palette.primary.main,
  },
}));

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  // const classes = useStyles();
  const classes = useStyles();
  return (
    <button {...props} className={classes.button}>
      {label}
    </button>
  );
};

export default Button;
