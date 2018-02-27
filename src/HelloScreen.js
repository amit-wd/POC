// JavaScript screen component wrapper for hot reloading compatibility
// Without this (using `Hello` directly when registering) hot reloading
// does not work.

import React from 'react';
import { Hello } from 'src/Hello';

class HelloScreen extends React.Component {
    render() {
        return <Hello />;
    }
}

export default HelloScreen;
