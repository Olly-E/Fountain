import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@mui/material";
  import {GiHamburgerMenu} from 'react-icons/gi'
 
  import { useState } from "react";
  
  const data = [
    {
      name: "Home"
    },
    { name: "Inbox"},
    { name: "Outbox"},
    { name: "Sent mail" },
    { name: "Draft" },
    { name: "Trash" },
  ];
  
  export default function Sidebar() {
    const [open, setOpen] = useState(false);
  
    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        <div style={{color: 'white', fontSize: '2rem', padding: '0.3rem'}} onClick={() => setOpen(true)}><GiHamburgerMenu /></div>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  