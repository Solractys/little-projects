import './App.css';
import axios from 'axios'
import React, { Component } from 'react';
import { render } from '@testing-library/react';


const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class App extends Component {

  state = [...initialState]

  clear() {
    this.setState({ user: initialState })
  }
  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdateList(resp.data)
        this.setState({ user: initialState, list })
      })

  }
  getUpdateList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)
    return list
  }
  updateFiel(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }
  renderForm() {
    render(){
      return (
        <div className='form'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='form-group'>
                <label>Nome
                  <input type="text" className="form-control"
                    value={this.state.user.name}
                    onChange={e => this.updateFiel(e)}
                    placeholder="Digite seu Nome"
                  ></input>
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      renderForm()
    )
  }
}
