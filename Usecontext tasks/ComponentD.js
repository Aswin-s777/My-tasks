import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentD extends Component {
    render() {
        return (
            <div>
                 <h1>This is component D</h1>
                 <ComponentE/>
            </div>
        )
    }
}

export default ComponentD