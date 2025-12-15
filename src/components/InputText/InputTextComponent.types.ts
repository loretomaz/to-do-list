export interface IInputTextComponentProps {
  label?: string;
  onChange: (value: string) => void;
  onSubmit: VoidFunction;
  required?: boolean;
  value: string;
  isError?: boolean;
  helperText?: string;
}
