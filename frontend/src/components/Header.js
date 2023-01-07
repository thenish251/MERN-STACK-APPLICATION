// import React, { useState } from "react";
// import { AppBar, Tabs, Toolbar, Typography } from "@mui/material";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  // const [value, setValue] = useState();
  return (
    // <div>
    //   <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
    //     <Toolbar>
    //       <Typography>
    //         <MdOutlineLibraryBooks />
    //       </Typography>
    //       <Tabs
    //         sx={{ ml: "auto" }}
    //         textColor="inherit"
    //         indicatorColor="primary"
    //         value={value}
    //         onChange={(e, val) => setValue(val)}
    //       >
                      
    //         <Tab linkComponent={NavLink} to="/add" label ='Add Product'/>
    //         <Tab linkComponent={NavLink} to="/books" label='Books'/>
    //         <Tab linkComponent={NavLink} to="/about" label='About Us'/>
           
    //       </Tabs>
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <>
    {/* <nav class="navbar">
       <div class="container-fluid . ">
       <MdOutlineLibraryBooks />
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/add">Add Product</a>
        <a class="nav-link" href="/books">Books</a>
        <a class="nav-link" href="/about">About Us</a>
      </div>
  </nav> */}
       <div className="navbar d-md-flex">
       <MdOutlineLibraryBooks />
       <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/add">Add Product</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </div>
    </>
  );
};

export default Header;
