import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        id: 'id',
        login: 'IrakliGiorgadze',
        avatar_url: 'https://avatars0.githubusercontent.com/u/14906572?s=460&u=233e7a6dc4552343d1fff260be01adb4876761d8&v=4',
        html_url: 'https://github.com/IrakliGiorgadze',
    };

    render() {
        const { login, avatar_url, html_url } = this.state;

        return (
            <div className="card text-center">
                <img 
                    src={ avatar_url } 
                    className="round-img" 
                    style={{ width: '60px' }} 
                />
                <h3>{ login }</h3>

                <div>
                    <a href={ html_url } className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
            </div>
        )
    }
}

export default UserItem
