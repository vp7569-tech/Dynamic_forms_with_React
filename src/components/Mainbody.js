import React from 'react'
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {IconButton} from "@material-ui/core";
import "./Mainbody.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';

import doc_image from "../images/recent.jpg"
function Mainbody() {
  return (
    <div className='main_body'>
       <div className='mainbody_top'>
       <div className='mainbody_top_left' style={{fontSize:"20px",fontWeight:"500",marginLeft:"157px"}}>
        Recent Forms
       </div>
       <div className='mainbody_top_right'>
         <div className='mainbody_top_center' style={{fontSize:"20px",marginRight:"250px"}}>Owned by Anyone <ArrowDropDownIcon/></div>
         <IconButton>
          <StorageIcon style={{fontSize:"16px",color:"black"}}/>
         </IconButton>
         <IconButton>
          <FolderOpenIcon style ={{fontSize:"16px",color:"black"}}/>
         </IconButton>
       </div>

       </div>
       <div className='mainbody_docs'>
             <div className='doc_card'>
             <img src={doc_image} className="doc_image"/>
             <h4>Document</h4>
             <div className='doc_card_content'>
                
                <div className='doc_content' style={{fontSize:"16px",color:"grey"}}>
                  <div className='content_left'>
                    <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",marginRight:"5px"}}/>
                  </div>
                  <IconButton>
                  <MoreVertIcon style={{fontSize:"16px",color:"grey"}} />
                  </IconButton>
                  
                </div>
             </div>
             </div>
            

       </div>
      
    </div>
  )
}

export default Mainbody;
