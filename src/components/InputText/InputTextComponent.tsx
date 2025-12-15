import { Box, TextField } from "@mui/material";
import { styles } from "./InputTextComponent.style.ts";
import { IInputTextComponentProps } from "./InputTextComponent.types";
import React, { useState, KeyboardEvent } from "react";

export const InputTextComponent: React.FC<IInputTextComponentProps> = ({
  label,
  onChange,
  onSubmit,
  required,
  value,
  isError,
  helperText,
}) => {
  return (
    <TextField
      fullWidth
      helperText={helperText}
      error={isError}
      label={label}
      variant="outlined"
      size="small"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onSubmit();
        }
      }}
      required={required}
      slotProps={{
        input: { style: styles.textField },
        inputLabel: { style: styles.inputLabel },
      }}
    />
  );
};
