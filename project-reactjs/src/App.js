import React, {Component} from "react";
import logo from './logo.svg';
import "./App.css";
import AddProject from './components/Projects/AddProject'
import ListProject from './components/Projects/ListProject'
import EditProject from "./components/Projects/EditProject";
import ProjectIndex from "./components/Projects/ProjectIndex";
import AppHeader from './components/Header/AppHeader'
import Sidebar from "./components/Header/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return(
      <div class="container">
        {/* <AddProject/> */}
        {/* <ListProject/> */}
        {/* <EditProject/> */}

        <div class="row">
        <AppHeader/>
        </div>

        <div class="row">
        <div class="col-md-8 offset-md-2">
        <ProjectIndex/>
        </div>
        
        </div>
        {/* <Sidebar/> */}
      </div>
    );
  }
}

export default App;
