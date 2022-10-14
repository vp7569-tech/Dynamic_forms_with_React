import React from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton, makeStyles} from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import formimage from "../images/form.png"
import docimage from "../images/doc.png"
import excelsheetimage from "../images/sheets.png"
import slidesimage from "../images/slides.png"
import driveimage from "../images/drive.png"
import "./Drawer.css"
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

const useStyles=makeStyles({
    listItem:{
        marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"
    },slideimages:{
        height:"20px",width:"20px"
    }
});

function TemporaryDrawer()
{   const classes=useStyles();
    var [state,setState]=React.useState({
    left: false
})

const toggleDrawer=(anchor,open) =>(event)=>{
    setState({ ...state,[anchor]:open});

};
const list=(anchor)=>(
     <div style={ { width:"250px"}}role="presentation" >
    <Divider/>
        <List>
            <ListItem>
            <ListItemText style={{fontSize:"48px",marginLeft:"10px"}}>
                <span style={{color:"#5f6368",fontweight:"500",fontSize:"22px",fontfamily:"'Product Sans',Arial,sans-serif"}}>   My Docs</span>
            </ListItemText>
                
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginleft:"08px",marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={docimage} className={classes.slideimages}/>
                <div className={classes.listItem}>Docs</div>
            </ListItem>

            <ListItem className="list_item">
                <img src={excelsheetimage} className={classes.slideimages}/>
                <div className={classes.listItem}>Sheets</div>
            </ListItem>

            <ListItem className="list_item">
                <img src={slidesimage} className={classes.slideimages}/>
                <div className={classes.listItem}>Slides</div>
            </ListItem>

            <ListItem className="list_item">
                <img src={formimage} className={classes.slideimages}/>
                <div className={classes.listItem}>Forms</div>
            </ListItem>


        </List>
        <Divider/>
        <List style={{marginLeft:"08px",marginRight:"08px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <FiSettings/>
                <div style={{marginLeft:"20px",fontSize:"14px",fontweight:"500"}}>
                    Settings
                </div>
            </ListItem>
            <ListItem className="list_item">
                <BsQuestionCircle/>
                <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>
                   Help & Feedback 
                </div>
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:"08px",marginRight:"08px",marginTop:"15px"}}>
            <ListItem className='list_item'>
                <img src={driveimage} style={{height:"20px",width:"20px"}}/>
                <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500"}}>Drive</div>
            </ListItem>
        </List>
    </div>
)
    return(
        <div>
        <React.Fragment>
        <IconButton onClick={toggleDrawer("left",true)}>
            <MenuIcon/>
         </IconButton>
         <Drawer open={state['left']} onclose={toggleDrawer("left",false)}anchor={'left'}>
         {list('left')}
         </Drawer>
        </React.Fragment>
        
        </div>
    )
}
export default TemporaryDrawer;