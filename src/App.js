import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar'
import './App.css';
import { TextField } from '@material-ui/core';
import axios from'axios';
import SideBar from './Components/Sidebar';
import Display from './Components/Display';
import SubmitForm from './Components/SubmitForm'
import GitHubWrapper from './Components/Wrapper'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { Typography } from '@mui/material';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataFound: true,
      open: false,
      gistPreview: '',
      gistData: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.handleMenuIcon = this.handleMenuIcon.bind(this)
    this.deleteGist = this.deleteGist.bind(this)
  }

  handleClick(id, e){
    e.preventDefault();
    this.setState({ 
      open: false,
      gistPreview: id
    })
  }

  handleMenuIcon(e) {
    e.preventDefault()
    if (this.state.open === true) {
      this.setState ({
        open: false
      })
    } else if (this.state.open === false) {
      this.setState ({
        open: true
      })
    }
  }

  handleOverlayClick(){
    if (this.state.open === true) {
      this.setState ({
        open: false
      })
    } else if (this.state.open === false) {
      this.setState ({
        open: true
      })
    }
  }

  async getGists() {
    try {
      let gistData = await axios.get('https://api.github.com/users/Davide-Betlej/gists');
      return gistData
    } catch (error) {
      console.error(error);
    }
  }

async componentDidMount() {
  let gistData = await this.getGists()
  if (gistData.status === 200) {
    this.setState({
      gistPreview: gistData.data[0].id,
      gistData: gistData.data,
    })
    console.log(gistData.data)
    console.log('All good!')
  } else {
    this.setState({
      dataFound: false
    })
  }
}


deleteGist () {
  let ghWrapper = new GitHubWrapper()
  ghWrapper.deleteGist(this.state.gistPreview).then((response) => console.log(response)).then(() => alert('Gist Deleted!')).catch((error) => alert(error))
  this.setState({gistPreview: ''})
}

  render() {
    return (
        <div>
          <AppBar position="sticky">
              <Toolbar>
              <MenuIcon onClick={this.handleMenuIcon} style={{ cursor: 'pointer' }} />
              <Typography variant="h4" component="div" align='center' marginLeft='2rem' noWrap='true'>
                    Gist App - Davide Betlej
                  </Typography> 
              <TextField
              placeholder="Search…"
               />
               <AutorenewIcon onClick={this.componentDidMount} style={{marginLeft: 100, cursor: 'pointer'}}/>
               
              </Toolbar>
                
            </AppBar>
          <SideBar
            open={this.state.open}
            dataFound={this.state.dataFound}
            gistData={this.state.gistData}
            handleoverlayclick={this.handleOverlayClick}
            onClick={this.handleClick}
          />
          <Display
            gistPreview={this.state.gistPreview}
            dataFound={this.state.dataFound}
            deleteGist={this.deleteGist}
          />
          <SubmitForm 
            gistPreview={this.state.gistPreview}
          />
        </div>
    );
  }
}

export default App