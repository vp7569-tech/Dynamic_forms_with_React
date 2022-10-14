import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import blank from "../images/blank.jpg";
import event from "../images/event.jpg";
import contact from "../images/contact.jpg";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import "./Template.css";

function Template() {
  const history = useHistory();
  const createForm = () => {
    const id_ = uuid();

    history.push("/form/");
  };
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span
            style={{ fontSize: "20px", fontWeight: "500", color: "#202124" }}
          >
            Build Your New Form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="no image" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={event} alt="no image" className="card_image" />
          <p className="card_title">Event Registration</p>
        </div>
        <div className="card">
          <img src={contact} alt="no image" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
