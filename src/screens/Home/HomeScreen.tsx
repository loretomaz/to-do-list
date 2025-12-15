import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import { CheckboxComponent } from "../../components/Checkbox/CheckboxComponent.tsx";
import { InputTextComponent } from "../../components/InputText/InputTextComponent.tsx";
import { styles } from "./HomeScreen.styles.ts";
import { useHomeScreen } from "./HomeScreen.rules.ts";

export const HomeScreen = () => {
  const {
    errorMessage,
    inputState,
    lista,
    handleAddValue,
    handleChangeInput,
    handleDeleteValue,
    handleUpdateValue,
  } = useHomeScreen();

  return (
    <header className="App-header">
      <img src="unnamed.gif" alt="Hello Kitty" width={80} />
      <h3>welcome to your to-do list!</h3>
      <a
        className="App-link"
        href="https://youtu.be/JaY0W5lT7xk?si=WM1JnKNixFKEOBAW"
        target="_blank"
        rel="noopener noreferrer"
      >
        how about start listening to some music?
      </a>
      <section className="App-checkbox"></section>
      <Box sx={styles.container}>
        {lista.map((itemDaLista) => (
          <Box
            key={itemDaLista.id}
            sx={{
              ":hover": {
                backgroundColor: "#e8e8e8ff",
                transition: "background-color 0.2s",
                "& button": {
                  visibility: "visible",
                },
              },
            }}
            alignItems="center"
            display="flex"
            width="100%"
            justifyContent="space-between"
            padding="0px 12px 0px 0px"
            borderRadius="6px"
          >
            <CheckboxComponent
              item={itemDaLista}
              onChange={handleUpdateValue}
            />
            <IconButton
              sx={{ visibility: "hidden" }}
              onClick={() => handleDeleteValue(itemDaLista.id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          minHeight={60}
          width="100%"
          justifyContent="space-between"
        >
          <InputTextComponent
            label="add here your new task"
            value={inputState}
            onChange={handleChangeInput}
            onSubmit={handleAddValue}
            required
            isError={!!errorMessage} //verifica se existe
            helperText={errorMessage}
          />

          <IconButton
            onClick={() => handleAddValue()}
            sx={{ color: "#e3677c" }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </header>
  );
};
