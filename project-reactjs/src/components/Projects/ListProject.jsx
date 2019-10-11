import React from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./button.css";

class ListProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: null, query: "" };
    this.deleteProject = this.deleteProject.bind(this);
    this.refreshProject = this.refreshProject.bind(this);
    this.routeAddProject = this.routeAddProject.bind(this);
  }

  routeAddProject() {
    let path = `/AddProject`;
    this.props.history.push(path);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/test/api/v1/project").then(response => {
      this.setState({ projects: response.data });
      console.log(response.data );
    });

   
    this.refreshProject();
  }

  
  refreshProject() {
    axios.get("http://localhost:8080/test/api/v1/project").then(response => {
     // console.warn("Refresh Service is working");
      this.setState({ projects: response.data });
    });
  }

  routeEditProject(id) {
    this.props.history.push(`/EditProject/${id}`);
  }


  deleteProject(id) {
    axios
      .delete("http://localhost:8080/test/api/v1/project/" + id)
      .then(response => {
       // console.warn("Delete Service is working");
        this.refreshProject(response);

        alert(" Project deleted successfully");
      });
  }
 

  render() {
    return (
      <div className="body">
        <br />

        
        <br />
        <br />
        <br />
        <div className="container" onLoad={this.refreshProject}>
       
         
          <br />
          <h3 align="center">LIST-PROJECTS</h3>
          <br />

          <table id="table" cellpadding="2" cellspacing="2" border="1" align="center">
            <thead>
              <tr>
                <th>PROJECT-ID</th>
                <th>PROJECT-NAME</th>
                <th>PROJECT-DESCRIPTION</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.projectName}</td>
                  <td>{project.projectDescription}</td>
                  <td>
                    <button className="editButton" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditProject(project.id)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button
                      className="deleteButton"
                     
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Project? "
                        ) && this.deleteProject(project.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="addButton"
            type="submit"
            onClick={this.routeAddProject}
            align="center"
            
          >
             <i className="fa fa-plus"> Add</i>
          </button>
        </div>
      </div>
    );
  }
}

export default ListProject;
