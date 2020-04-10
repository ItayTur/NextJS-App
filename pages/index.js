import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class Index extends Component {
    static async getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'NextJS App' })
            }, 1000);
        });
        return await promise;
    }

    render() {
        return (
            <div>
                <h1>Main Page Of - {this.props.appName} </h1>
                <p>Go to <Link href='/auth'><a>auth page</a></Link></p>
                <button onClick={() => Router.push('/auth')}>open auth page</button>
            </div>
        )
    }
}

export default Index;