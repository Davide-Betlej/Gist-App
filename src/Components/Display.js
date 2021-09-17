import React from 'react';
import Gist from 'react-gist'
import { Button, Divider } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';

class Display extends React.Component {

    
  render(){
    return (
        <div>
            {this.props.gistPreview || !this.props.dataFound ?
            <div className="GistPreview"><Gist className="Gist" id={this.props.gistPreview} /></div> : null}
            <Divider />
            {this.props.gistPreview || !this.props.dataFound ?
            <div className="DeleteButton">
                <Button
                onClick={this.props.deleteGist}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
            </div> : null}
        </div>
    );
  }
}

export default Display;