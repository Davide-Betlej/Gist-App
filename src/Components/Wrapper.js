import React from 'react';
const axios = require('axios');

class GitHubWrapper extends React.Component {
    constructor(token) {
        super(token)
        this.token = 'CHANGE THIS TOKEN'
        this.client = axios.create({
            baseURL: 'https://api.github.com/',
            responseType: 'json',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': 'token ' + this.token
            }
        })
    }

     getRequest(path) {
        return this.client.get(path)
      }
    
      postRequest(path, payload) {
        return this.client.post(path, payload)
      }

      deleteRequest(path) {
          return this.client.delete(path)
      }

      patchRequest(path, payload) {
        return this.client.patch(path, payload)
      }
    
      root() {
        return this.getRequest('/')
      }
    
      createGist(payload) {
        return this.postRequest('/gists', payload)
      }
    
      getGist(gistId) {
        return this.getRequest(`/gists/${gistId}`)
      }

      deleteGist(gistId) {
          return this.deleteRequest(`/gists/${gistId}`)
      }

      editGist(gistId, payload) {
        return this.patchRequest(`/gists/${gistId}`, payload)
      }
    }

    export default GitHubWrapper
