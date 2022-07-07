import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./main.css";
import { height } from "@mui/system";

const style = {
  borderRadius: "5%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    width: "21%",
  bgcolor: "background.paper",
  //   border: '2px solid #000',

  boxShadow: 24,
  p: 4,
  outline: 0,
};

export default function BasicModal({ open, props, handleClose }) {
  console.log(open, props, handleClose);
//   let location=props.origin.name
  // let origin=props.origin.name
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="display_flex">
              <div className="display_image" style={{ width: "40%" }}>
                <img src={props.image} style={{ height: "7rem" }} alt="" />
              </div>

              <div>
                <h3 style={{ marginLeft: "1rem" }}>{props.name}</h3>

                <div className="display_flex ">
                  <div
                    style={{ height: "1rem", width: "1rem" }}
                    className={
                      (props.status && props.species == "Humanoid") ||
                      props.status == "Alive"
                        ? "display_status_green"
                        : "display_status_grey"
                    }
                  ></div>
                  <p style={{ fontSize: "1rem", fontWeight: "normal" }}>
                    {props.status} - {props.species}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="display_flex">
              <div style={{ width: "50%" }}>
                <div>
                  {" "}
                  <div className="userCard_title">Gender</div>
                  <h4 className="userCard_text">{props.gender}</h4>
                </div>
                <div>
                  {" "}
                  <div className="userCard_title"> Species</div>
                  <h4 className="userCard_text">{props.species}</h4>
                </div>
              </div>
              <div>
                <div>
                  <div className="userCard_title"> Location</div>
                  {props.origin!==undefined?<h4 className="userCard_text">{props.origin.name}</h4>:null}
      
                </div>
                <div>
                  <div className="userCard_title"> Origin</div>
                  {props.origin!==undefined?<h4 className="userCard_text">{props.origin.name}</h4>:null}
               
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
