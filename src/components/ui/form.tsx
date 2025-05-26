import React, {
  type FormEvent,
  type ReactNode,
  type CSSProperties,
} from "react";
import "./form.css";
import { useTheme } from "../../theme";

interface CustomFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CustomForm: React.FC<CustomFormProps> = ({
  onSubmit,
  children,
  style = {},
}) => {
  const { theme } = useTheme();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form-theme-${theme}`}
      style={style}
    >
      {children}
    </form>
  );
};

export default CustomForm;
