import { Modal } from "@mui/material"
import React from "react";

interface Props {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReviewModal = ({open,handleClose}:Props)=>{
 return (
   <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
    <h1>Hello</h1>
   </Modal>
 );
}