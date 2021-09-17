import  React from 'react'
import GitHubWrapper from './Wrapper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';




const defaultState = {
    description: '',
    extension: '',
    content: '',
    editDescription: '',
    editExtension: '',
    editContent: ''
}

class SubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = defaultState
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      }

      handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
      }

      handleSubmit(e) {
        e.preventDefault();
        const data = {
          description: this.state.description,
          public: true,
          files: {[this.state.extension]: {content: this.state.content}}
        }
        let ghWrapper = new GitHubWrapper()
        ghWrapper.createGist(data).then(() => alert('Gist Submitted!')).catch((error) => alert(error))
        this.formReset();
      }

      handleEdit(e) {
        e.preventDefault();
        const data1 = {
          description: this.state.editDescription,
          files: {[this.state.editExtension]: {content: this.state.editContent}}
        }
        let ghWrapper = new GitHubWrapper()
        ghWrapper.editGist(this.props.gistPreview, data1).then(() => alert('Gist Edited!')).catch((error) => alert(error))
        this.editFormReset();
      }
  
      editFormReset = () => {
        document.getElementById('EditForm').reset()
        this.setState(defaultState)
      }

      formReset = () => {
        document.getElementById('SubmitForm').reset()
        this.setState(defaultState)
      }

    render() {
      return (
        <div style={{display: 'flex', width:'100%', justifyContent: 'space-around'}}>
          <div className="AddGistDiv">
            <Box sx={{ width: '100%', maxWidth: 500, border: '1px solid grey', padding: '2rem' }}>
              <Typography variant="h2" component="div" gutterBottom align='center'>
                Add Gist:
              </Typography>
            
            <form id="SubmitForm" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div>
                <label htmlFor="description">Description:</label>
                <input className="GistDesc" type="text" name="description" id="description" placeholder="Hello World example" ></input>
              </div>
                <br />
                <label htmlFor="extension">Filename(with extension): </label>
                <input className="GistExt" type="text" name="extension" id="extension" placeholder="helloWorld.js"></input>
                <br />
                <div className="TextArea">
                  <Typography variant="h4" component="div" gutterBottom align='center'>
                    Code:
                  </Typography>
                  <textarea name="content" className="AddGistTextArea" placeholder="console.log('Hello World!')"></textarea>
                </div>
                <br />
                <div className="DivButton">
                  <Button variant="contained" endIcon={<SendIcon />} type="submit">
                    Submit
                  </Button>
                </div>
            </form>
            </Box>
          </div>
          <div className="EditGistDiv">
          <Box sx={{ width: '100%', maxWidth: 500, border: '1px solid grey', padding: '2rem' }}>
              <Typography variant="h2" component="div" gutterBottom align='center'>
                Update Gist:
              </Typography>
            <form id="EditForm" onChange={this.handleChange}>
              <div>
                <label htmlFor="description">Description:</label>
                <input className="GistDesc" type="text" name="editDescription" id="description" ></input>
              </div>
                <br />
                <label htmlFor="extension">Filename(with extension): </label>
                <input className="GistExt" type="text" name="editExtension" id="extension" ></input>
                <br />
                <div className="TextArea">
                  <Typography variant="h4" component="div" gutterBottom align='center'>
                    Code:
                  </Typography>
                  <textarea name="editContent" className="AddGistTextArea"></textarea>
                </div>
                <br />
                <div className="DivButton">
                  <Button variant="contained" endIcon={<SendIcon />} type="submit" onClick={this.handleEdit}>
                    Submit
                  </Button>
                </div>
            </form>
            </Box>
          </div>
        </div>
      );
    }
  }
  
  export default SubmitForm;



