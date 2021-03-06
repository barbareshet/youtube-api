import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    // Initialized State
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         //property
    //
    //     };
    // }
    handleChange = ( event )   =>{
        // console.log(event.target.value);
        this.setState({
            searchTerm:event.target.value
        })
    };
    handleSubmit = (event)   =>{
        const  { searchTerm } = this.state;
        const  { onFormSubmit } = this.props;
        onFormSubmit(searchTerm) ;

        event.preventDefault();
    };
    render() {
        return (
            <Paper elevation={6} style={{padding:"25px"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search For Video" onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }


}

export default SearchBar;