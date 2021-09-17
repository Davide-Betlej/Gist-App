import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from'@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class SideBar extends React.Component {


  render(){
    return (
      <Drawer open={this.props.open}>
        <AppBar/>
        <List>
        {this.props.dataFound ? this.props.gistData.slice(0, 20).map((item, index) => {
          return (
                <ListItem button key={index} onClick={(e) => this.props.onClick(item.id, e)}>
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    <ListItemText primary={item.description} />
                </ListItem>   
          )
        }) : (
            <ListItem> 
              <ListItemText primary="No gists yet..." />
            </ListItem>
        )}
        
        </List>
      </Drawer>
    );
  }
}

export default SideBar;