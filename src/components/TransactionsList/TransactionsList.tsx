import * as React from "react";
import moment from "moment";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";
import Typography from "@material-ui/core/Typography/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Transactions } from "../../types";
import Spinner from "components/Spinner";

interface IListTransactionsProps {
  transactions: Transactions;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    title: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
    bodyTable: {
      "& .MuiTableCell-root": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    smallCell: {
      maxWidth: "100px",
    },
    normalCell: {
      maxWidth: "150px",
    },
  })
);

const TransactionsList: React.FC<IListTransactionsProps> = ({
  transactions,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {transactions ? (
          <TableContainer component={Paper} className={classes.root}>
            <Typography variant="h6" component="h6" className={classes.title}>
              Transactions List:
            </Typography>
            <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Txn Hash</TableCell>
                    <TableCell>Block</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>[Txn Fee]</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.bodyTable}>
                  {transactions.map((row: any, index: number) =>
                      index < 10 && (
                        <TableRow key={index}>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.normalCell}
                          >
                            <a href={`https://etherscan.io/tx/${row.hash}`} target='_blank' rel="noopener noreferrer">
                              {row.hash}
                            </a>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.smallCell}
                          >
                            <a href={`https://etherscan.io/block/${row.blockNumber}`} target='_blank' rel="noopener noreferrer">
                              {row.blockNumber}
                            </a>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.smallCell}
                          >
                            {moment.unix(row.timeStamp).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.normalCell}
                          >
                            {row.from}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.normalCell}
                          >
                            <a href={`https://etherscan.io/address/${row.to}`} target='_blank' rel="noopener noreferrer">
                              {row.to}
                            </a>
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.smallCell}
                          >
                            {row.value}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className={classes.smallCell}
                          >
                            {row.gas}
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
             </Table>
          </TableContainer>
      ) : (
        <Spinner visible={true} size="28px" />
      )}
    </React.Fragment>
  );
};

export default TransactionsList;
