import * as React from 'react';
export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void
}
const styles = {
  border: '2px solid #efe',
  borderRadius: 5,
  backgroundColor: '#FF00FF',
  cursor: 'pointer',
  fontSize: 25,
  padding: '6px 20px',
  margin: 20,
};
const Button: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={styles} type="button">
    {props.children}
  </button>
);
Button.defaultProps = {
  children: null,
  onClick: () => {}
};
export default Button;