import * as React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import { Data } from "../../types";

interface IListHistoryProps {
  list: Data;
  setAddress: any;
  fetchBalance: any;
  fetchTransaction: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    title: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
    row: {
      cursor: "pointer",
      "&:hover": {
        background: "#e4e4e4",
      },
      "& th": {
        lineHeight: "15px",
      },
    },
  })
);

const HistoryList: React.FC<IListHistoryProps> = ({
  list,
  setAddress,
  fetchBalance,
  fetchTransaction
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {Object.values(list).length > 0 ? (
        <TableContainer component={Paper} className={classes.root}>
          <Typography variant="h6" component="h6" className={classes.title}>
            Last addresses:
          </Typography>
          <Table aria-label="simple table">
            <TableBody>
              {Object.keys(list)
                .reverse()
                .map(
                  (item: string, index: number) =>
                    index < 5 && (
                      <TableRow key={item} className={classes.row}>
                        <TableCell
                          component="th"
                          scope="row"
                          onClick={() => {
                            setAddress(item);
                            fetchBalance(item).then(() => fetchTransaction(item))
                          }}
                        >
                          {item}
                        </TableCell>
                      </TableRow>
                    )
                )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </React.Fragment>
  );
};

export default HistoryList;
