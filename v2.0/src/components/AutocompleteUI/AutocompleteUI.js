import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class AutocompleteUI extends Component {

keySubmit = (e)=>{
    if (e.keyCode == 13) {
    this.props.filterByStudent();
    }
}

render() {
    return (
        <div>
            <Autocomplete
                id="student-autocomplete"
                options={this.props.students}
                getOptionLabel={option => option}
                style={{ width: 350 }}
                onKeyDown={this.keySubmit}
                renderInput={params => (
                    <TextField {...params} label="Filter by Person Code" variant="outlined" fullWidth />

                )}
            />
        </div>
    );
    }
}

export default AutocompleteUI;