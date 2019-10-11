import React, {Component} from "react";
import axios from "axios";
import {Formik, Form, Field} from "formik";
import "./form.css";
import "./button.css";

class EditProject extends Component{
    constructor(props){
        super(props);
        this.state = {projects: [], name: null};
        this.state.projects = {
            // id,
            projectName: "",
            projectDescription: ""
        };

        // this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangename = this.handleChangename.bind(this);
        this.handleChangedescription = this.handleChangedescription.bind(this);
        this.routeListProject = this.routeListProject.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChangename(f){
        this.setState({
            txtprojectname: f.target.value
        });
    }

    handleChangedescription(f1){
        this.setState({
            txtprojectdescription: f1.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const update = {
            projectName: this.state.txtprojectname,
            projectDescription: this.state.txtprojectdescription
        };
        axios.put("http://localhost:8080/test/api/v1/project/"+this.props.match.params.id, update).then(res => {
            if(res.status === 200){
                alert("Project update successfully.");
                window.location.reload();
            }
        });

        this.routeListProject();
    }

    routeListProject(){
        let path = `/`;
        this.props.history.push(path);
    }

    render(){
        return(
            <div className="body">
                <div className="container">
                <br />
                <button
                    className="button blue"
                    type="submit"
                    onClick={this.routeListProject}
                    >
                        <i className="fa fa-arrow-circle">Back</i>
                    </button>
                <h3 align="center">EDIT-PROJECTS</h3>
                </div>

                <Formik>
                <Form className="container" onSubmit={this.onSubmit}>
                <fieldset className="form-group">
                    <label> Project Name</label>
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
                    <label> Project Description</label>
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
                    <i className="fa fa-plus"> Update</i>
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

export default EditProject;