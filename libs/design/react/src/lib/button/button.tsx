import './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div>
      <h1 className="text-red-900">Welcome to Button!</h1>
    </div>
  );
}

export default Button;
