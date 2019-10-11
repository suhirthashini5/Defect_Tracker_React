import React, { Component } from 'react';
class Sidebar extends Component {
    state = {  }
    render() { 
      return ( 
        <div className="sidenav">
            <br/>
          <li><h2>Project</h2></li>
    <li><a href="/">List Project</a></li>
    <li><a href="/AddProject">Create Project</a></li>
    
  </div>
       );
    }
  }
   
  export default Sidebar;