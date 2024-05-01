// import CloseIcon from "@mui/icons-material/Close";
// import { Divider } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material";
// import Snackbar from "@mui/material/Snackbar";
// import React from "react";
// import { SignalWifi1BarLockRounded } from "@mui/icons-material";

// interface CustomSnackbarProps {
//   open: boolean;
//   handleClose: () => void;
//   msg: string;
// }

// const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
//   open,
//   handleClose,
//   msg,
// }) => {
//   const action = (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           {" "}
//           <h5> Upload Progress</h5>
//         </div>

//         <div>
//           <IconButton
//             size="small"
//             aria-label="close"
//             color="inherit"
//             onClick={handleClose}
//           >
//             <CloseIcon />
//           </IconButton>
//         </div>
//       </div>
//       <Divider orientation="horizontal" flexItem />
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         <div
//           style={{
//             height: 25,
//             width: 25,
//             borderRadius: 0,
//             backgroundColor: "lime",
//           }}
//         ></div>
//         <h5>PLA2356</h5>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           style={{
//             height: 10,
//             width: 80,
//             borderRadius: 20,
//             backgroundColor: "lime",
//           }}
//         ></div>
//         <h6>60%</h6>

//         <div>Cancel</div>
//       </div>
//     </div>
//   );

//   return (
//     <Snackbar
//       open={open}
//       autoHideDuration={300000}
//       onClose={handleClose}
//       //   message={msg}
//       action={action}
//       //   bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}

//       anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       sx={{ backgroundColor: "white" }}
//    />
//   );
// };
// export default CustomSnackbar;

import CloseIcon from "@mui/icons-material/Close";
import { Divider, IconButton, Snackbar, LinearProgress, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

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

  // using nodejs.timeout
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            handleClose(); // Close the Snackbar after completion
            return 0; // Reset progress to 0
          } else {
            return prevProgress + 10;
          }
        });
      }, 500); // Adjust the interval as needed
    }

    return () => {
      clearInterval(timer);
    };
  }, [open, handleClose]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(timer);
  //         handleClose(); 
  //         return 100; 
  //       } else {
  //         return prevProgress + 10;
  //       }
  //     });
  //   }, 500);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // useEffect(() => {
  //   if (progress >= 100) {
  //     handleClose();
  //   }
  // }, [progress, handleClose]);
  return (
    <Snackbar
  open={open}
  autoHideDuration={null} // Do not auto-hide
  onClose={handleClose}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 1 }}>Upload Progress</Typography>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}
      //  sx={{ alignSelf: 'flex-end', marginBottom: -1 }}
       >
        <CloseIcon />
      </IconButton>
      </Box>
      <Divider sx={{ marginBottom: 1 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        <div style={{ height: 25, width: 25, borderRadius: 0, marginRight: 1 , backgroundColor:'lime'}}></div>
        <Typography variant="h5">PLA2356</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <LinearProgress variant="determinate" value={progress} sx={{ flex: 1, borderRadius: 20, height:10 }} />
        <Typography variant="h6" sx={{ marginLeft: 1 }}>{`${progress}%`}</Typography>
        <div>Cancel</div>
      </Box>
    </Box>
    </Snackbar>

     );
};

export default CustomSnackbar;

