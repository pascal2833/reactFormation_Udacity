import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
    state = {
        contacts: [
            {
                id: 'tyler',
                name: 'Tyler McGinnis',
                handle: '@tylermcginnis',
                avatarURL: 'http://localhost:3000/tyler.jpg'
            },
            {
                id: 'karen',
                name: 'Karen Isgrigg',
                handle: '@karen_isgrigg',
                avatarURL: 'http://localhost:3000/karen.jpg'
            },
            {
                id: 'richard',
                name: 'Richard Kalehoff',
                handle: '@richardkalehoff',
                avatarURL: 'http://localhost:3000/richard.jpg'
            },
        ],
        contacts2: []
    }

    componentDidMount() {
        ContactsAPI.getAll()
            .then((contacts) => {
                this.setState(previousState => ({
                    contacts2: contacts
                }))
            })
    }

    removeContact = (contactToRemove) => {
        this.setState((currentState) => ({
           contacts: currentState.contacts.filter((contact) => {
               return contact.id !== contactToRemove.id
           })
        }))
    }

    createContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.concat([contact])
        }))
        /* ContactsAPI.create(contact)
            .then((contact) => {
                this.setState((currentState) => ({
                    contacts: currentState.contacts.concat([contact])
                }))
            }) */
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <ListContacts
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}/>
                <Route path='/create' render={({ history }) => (
                    <CreateContact
                        onCreateContact={(contact) => {
                            this.createContact(contact)
                            history.push('/')
                        }}
                    />
                )} />
            </div>
        )
    }
}

export default App
