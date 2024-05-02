import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  IconButton,
  Snackbar,
  LinearProgress,
  Typography,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            handleClose();
            return 0;
          } else {
            return prevProgress + 10;
          }
        });
      }, 300);
    }

    return () => {
      clearInterval(timer);
    };
  }, [open, handleClose]);

  const handleUploadCancel = () => {
    // Reset the progress when cancel is clicked
    setProgress(0);
    // Close the Snackbar
    handleClose();
    if (progress === 0) {
      console.log("Upload Stoped");
    }
  };

  return (
    <Snackbar
      sx={{
        backgroundColor: "#37434e",
        height: 80,
        width: 300,
        justifyContent: "center",
        padding: "20px",
        borderRadius: "5px",
      }}
      open={open}
      autoHideDuration={null}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: 16,
              textAlign: "center",
              fontWeight: 300,
            }}
          >
            Upload Progress
          </Typography>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleUploadCancel}
          >
            <CloseIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Divider
          sx={{
            marginBottom: 1,
            marginInline: "-20px",
            borderColor: "#959595",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 1,
            gap: 1,
          }}
        >
          <CloudCircleIcon sx={{ color: "#fff" }} />
          <Typography sx={{ color: "#fff", fontSize: 16 }}>PLA2356</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: 175 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ flex: 1, borderRadius: 20, height: 5 }}
            />
          </Box>

          <Typography style={{ color: "#fff", fontSize: 14, gap: 1 }}>
            {`${progress}%`}
          </Typography>
          
          <Typography
            sx={{
              marginLeft: 1,
              color: "#fff",
              fontSize: 18,
              cursor: "pointer",
            }}
            onClick={handleUploadCancel}
          >
            Cancel
          </Typography>
        </Box>
      </Box>
    </Snackbar>
  );
};

export default CustomSnackbar;
