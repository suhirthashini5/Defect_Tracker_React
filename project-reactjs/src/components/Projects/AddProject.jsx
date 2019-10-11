import React, {Component} from "react";
import axios from "axios";
import {Formik, Form, Field} from "formik";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./form.css";
import "./button.css";

class AddProject extends Component{
    constructor(props){
        super(props);
        this.state = {projects: [], name: null};
        this.state = {projectName: "", projectDescription: ""};
        // this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangedescription = this.handleChangedescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.routeListProject = this.routeListProject.bind(this); 
    }

    // handleChangeid(e){
    //     this.setState({
    //         txtprojectid: e.target.value
    //     });
    // }

    handleChangename(e1){
        this.setState({
            txtprojectname: e1.target.value
        });
    }

    handleChangedescription(e2){
        this.setState({
            txtprojectdescription: e2.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const save = {
            projectName: this.state.txtprojectname,
            projectDescription: this.state.txtprojectdescription
        };
        axios.post("http://localhost:8080/test/api/v1/project", save).then(res => {
            console.log(res);
           if(res.status === 200){
               alert("Project Added successfully.!");
               window.location.reload();
           } 
           
        });

        this.setState({
            projectName: "",
            projectDescription: ""
        });

        this.routeListProject();
    }

    routeListProject(){
        let path = `/`;
        this.props.history.push(path);
    }

    render(){
        return(
            <div class="body">
                <div class ="container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <button
                    className="button blue"
                    type="submit"
                    onClick={this.routeListProject}
                    >
                        <i className="fa fa-arrow-circle">Back</i>
                    </button>
                    <h3 align="center">ADD-PROJECT</h3>
                </div>
            

            <Formik>
                <Form className="container" onSubmit={this.onSubmit}>
                <fieldset className="form-group">
                        <label>Project Name</label>
                        <Field
                            className="form-control"
                            type="text"
                            name="txtprojectname"
                            value={this.state.txtprojectname}
                            onChange={this.handleChangename}
                            placeholder="Project Name Here"
                        />
                        </fieldset>
                        <fieldset className="form-group">
                        <label>Project Description</label>
                        <Field
                            className="form-control"
                            type="text"
                            name="txtprojectdescription"
                            value={this.state.txtprojectdescription}
                            onChange={this.handleChangedescription}
                            placeholder="Project Description Here"
                        />
                    </fieldset>
                    <button
                        className="addButton"
                        value="Submit"
                        type="submit"
                        align="center"
                    >
                        <i className="fa fa-plus">Add</i>
                    </button>
                    &nbsp;
                    <button
                        className="deleteButton"
                        type="reset"
                        onClick={this.routeListProject}
                        align="center"
                    >
                        <i className="fa fa-location-arrow"> cancel</i>
                    </button>
                    <br />
                    &nbsp; &nbsp; &nbsp;
                </Form>
            </Formik>
            </div>
        );
    }
}

export default AddProject;