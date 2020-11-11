import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider/Divider";
import Modal from "@material-ui/core/Modal";
import QRcodeIcon from "./QRcodeIcon";
import { formatBalance } from "utils";
import eth_logo from "../../eth_logo.png";

const useStylesModal = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    close: {
      display: "flex",
      cursor: "pointer",
      justifyContent: "flex-end",
    },
    code: {
      margin: "0 auto",
      display: "block",
    },
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      height: 28,
      margin: 4,
    },
    paper: {
      marginTop: theme.spacing(4),
      minHeight: 140,
      padding: "10px 15px",
    },
    qrAddress: {
      cursor: "pointer",
      color: "#000",
      display: "inline-block",
      padding: "17px 10px 0 0",
    },
    usd: {
      paddingLeft: "30px",
      color: "#888",
    },
  })
);

const Account = (props: any) => {
  const classesModal = useStylesModal();
  const classes = useStyles();
  const acc = props.account[props.address];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getQRcode = (address: string) =>
    `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${address}&choe=UTF-8`;

  const getUsdPrice = () => (props.ethPrice * (formatBalance(acc.result) as any)).toFixed(2)

  return (
    <Paper className={classes.paper} data-testid="account">
      <Typography variant="h6" component="h4">
        Account Balance:
      </Typography>
      <Typography variant="h5">
        <img src={eth_logo} height="38px" className="eth-logo" alt="logo" />
        &nbsp;
        <span data-testid="balance">{!!acc?.status && formatBalance(acc.result)}</span>
      </Typography>
      <Typography variant="h6">
        <span className={classes.usd}>{!!acc?.status && props.ethPrice && getUsdPrice()} $</span>
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        onClick={handleOpen}
      >
        <div className={classes.qrAddress}>
          <QRcodeIcon />
        </div>
        <span className={classes.qrAddress} data-testid="address">{props.address}</span>
      </Typography>
      <Modal
        data-testid="modal"
        className={classesModal.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classesModal.paper}>
          <div
            onClick={handleClose}
            data-testid="button-close"
            className={classesModal.close}
          >
            <span aria-label="Close">✖</span>
          </div>
          <p>
            {props.address}
            <Divider className={classes.divider} orientation="horizontal" />
          </p>
          <img src={getQRcode(props.address)} className={classesModal.code} alt="qrcode"/>
        </div>
      </Modal>
    </Paper>
  );
};

export default Account;
