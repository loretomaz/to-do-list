import { Box, Checkbox, Typography } from "@mui/material";
import { styles } from "./CheckboxComponent.styles.ts";
import { ICheckboxComponentProps } from "./CheckboxComponent.types.ts";

export const CheckboxComponent: React.FC<ICheckboxComponentProps> = ({
  item,
  onChange,
}) => {
  return (
    <Box display="flex" alignItems="center" minHeight={50}>
      <Checkbox
        onChange={(_, value) => onChange(item.id, value)}
        size="small"
        style={styles.checkbox}
      />
      <Box>
        <Typography
          style={{
            ...styles.taskTitle,
            textDecoration: !!item.done ? "line-through" : undefined,
          }}
        >
          {item.title}
        </Typography>
        <Typography style={styles.taskDate}>{item.done}</Typography>
      </Box>
    </Box>
  );
};
