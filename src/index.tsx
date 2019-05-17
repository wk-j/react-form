import React from "react"
import { render } from "react-dom"

export class App extends React.Component<{}, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>Hello, world!</h1>
        )
    }
}

var el = document.getElementById("root")
render(<App />, el)