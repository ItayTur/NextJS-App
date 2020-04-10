import React from 'react';
import User from '../../components/User/User';

const index = (props) => {
    return (
        <div>
            <h1>Auth Page Of - { props.appName }</h1>
            <User name={'Itay'} age={25}/>
            
        </div>
    );
};
index.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'NextJS App' })
        }, 1000);
    });
    return promise;
}

export default index;