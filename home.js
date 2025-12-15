import {
  Checkbox,
  Typography,
  FormControlLabel,
  FormGroup,
  Box,
  FormLabel,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useState } from "react";

const listaCompleta = [
  {
    id: 0,
    title: "shower",
  },
  {
    id: 1,
    title: "get dressed",
  },
  {
    id: 2,
    title: "eat breakfast",
  },
  {
    id: 3,
    title: "go to work",
  },
];

export function Lorena2() {
  const [list, setList] = useState(initialTodos);

  function handleAddTodo(title) {
    setList([
      ...list,
      {
        id: nextId++,
        title: title,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setList(
      list.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setList(list.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={listaCompleta}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export const HomeScreen = () => {
  const titulo = "to-do list!";

  return (
    <header className="App-header">
      <img src="unnamed.gif" alt="Hello Kitty" width={80} />
      <h3>welcome to your {titulo}</h3>
      <a
        className="App-link"
        href="https://youtu.be/vXgUJWo_or0?si=QVHPfa9OKCOYu4Lv"
        target="_blank"
        rel="noopener noreferrer"
      >
        how about start listening to some music?
      </a>
      <section className="App-checkbox"></section>
      <Box display="flex" flexDirection="column" gap={0}>
        {listaCompleta.map((itemDaLista) => (
          <Box display="flex" alignItems="center">
            <Checkbox
              size="medium"
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                height: "28px",
              }}
            />
            <Typography
              style={{
                color: "black",
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                height: "30px",
              }}
            >
              {itemDaLista.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        gap={1}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          label="add here your new task"
          variant="standard"
          size="small"
          slotProps={{
            input: {
              style: {
                color: "black",
                fontSize: "13px",
                width: "320px",
              },
            },
            inputLabel: {
              style: {
                color: "grey",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
              },
            },
          }}
        />
        <Fab
          color="primary"
          aria-label="add"
          style={{
            width: "40px",
            height: "40px",
            minHeight: "40px",
            backgroundColor: "rgb(227, 103, 123)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </header>
  );
};
