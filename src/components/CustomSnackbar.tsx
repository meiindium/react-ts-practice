import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

interface CustomSnackbarProps {
  open: boolean;
  handleClose: () => void;
  msg: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  handleClose,
  msg,
}) => {
  const action = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <h5> Upload Progress</h5>
        </div>

        <div>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <Divider orientation="horizontal" flexItem />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            height: 25,
            width: 25,
            borderRadius: 0,
            backgroundColor: "lime",
          }}
        ></div>
        <h5>PLA2356</h5>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: 10,
            width: 80,
            borderRadius: 20,
            backgroundColor: "lime",
          }}
        ></div>
        <h6>60%</h6>

        <div>Cancel</div>
      </div>
    </div>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={300000}
      onClose={handleClose}
      //   message={msg}
      action={action}
      //   bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}

      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      sx={{ backgroundColor: "white" }}
    />
  );
};

export default CustomSnackbar;
