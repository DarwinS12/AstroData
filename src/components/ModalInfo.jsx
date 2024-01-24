import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#ffffff",
  boxShadow: 24,
  p: 4,
};

export function ModalInfo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="btn-modal" onClick={handleOpen}>
        Names
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="moadalInfo" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rover and camera names
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              src="src\assets\OptInfoCameras.webp"
              style={{ width: "800px", boxShadow: "none" }}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
