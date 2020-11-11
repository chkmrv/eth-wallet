import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Alert from "@material-ui/lab/Alert";
import { validation } from "utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",

      '& .Mui-error': {
        color: '#f44336'
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

const Search = ({address, setAddress, fetchBalance, fetchTransaction}: any) => {
  const classes = useStyles();
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setValid(!validation(value));

    if (validation(value)) {
        setAddress(value)
        fetchBalance(value).then(() => fetchTransaction(value))
    }
  }

  return (
    <div>
      <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
        <InputBase
          autoFocus
          value={value}
          error={valid}
          required={!!address}
          onChange={(e: any) => setValue(e.target.value)}
          className={classes.input}
          placeholder="Search by Ethereum Address"
          inputProps={{"aria-label": "search ethereum address"}}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {valid && <Alert severity="error">Incorrect entry!</Alert>}
    </div>
  );
};

export default Search;
