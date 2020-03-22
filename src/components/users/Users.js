import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: 'https://avatars3.githubusercontent.com/u/1?s=400&v=4',
                html_url: 'https://github.com/mojombo',
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars3.githubusercontent.com/u/2?s=400&u=7675c0370b7876d71d1ee9b250b540fe1be28f23&v=4',
                html_url: 'https://github.com/defunkt',
            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars2.githubusercontent.com/u/3?s=400&v=4',
                html_url: 'https://github.com/pjhyett',
            },
        ]
    }

    render() {
        return (
            <div style={ userStyle }>
                {this.state.users.map(user => (
                    <UserItem key={ user.id } user={ user } />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users
