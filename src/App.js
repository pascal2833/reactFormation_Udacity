import React, { Component } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
    state = {
        contacts: [
            {
                "id": "karen",
                "name": "Karen Isgrigg",
                "handle": "karen_isgrigg",
                "avatarURL": "http://localhost:3000/karen.jpg"
            },
            {
                "id": "richard",
                "name": "Richard Kalehoff",
                "handle": "richardkalehoff",
                "avatarURL": "http://localhost:3000/richard.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "handle": "tylermcginnis",
                "avatarURL": "http://localhost:3000 /tyler.jpg"
            }
        ]
    }
    removeContact = (contactToRemove) => {
        this.setState((currentState) => ({
           contacts: currentState.contacts.filter((contact) => {
               return contact.id !== contactToRemove.id
           })
        }))
    }

    render() {
        return (
            <div>
                <ListContacts
                    contacts={this.state.contacts}
                    onDeleteContact={this.removeContact}
                />
            </div>
        )
    }
}

export default App
