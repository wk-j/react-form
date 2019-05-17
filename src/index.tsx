import React from "react"
import { render } from "react-dom"

import "./style.css"

type Form = {
    fieldA: string
    fieldB: string
    fieldC: string
}

type Forms = keyof (Form)

type Props = {}

type State = {
    data: Form
}

export class App extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                fieldA: "field-a",
                fieldB: "field-a",
                fieldC: "field-a"
            }
        }
    }

    onChange = (key: Forms) => (e) => {
        var value = e.target.value;
        let data = this.state.data;
        data[key] = value

        this.setState({
            data: data
        })
    }

    show = (e) => {
        console.log(this.state.data);
    }

    render() {
        var data = this.state.data;
        return (
            <div>
                <div>
                    <label>Field A</label>
                    <input type="text" value={data.fieldA} onChange={this.onChange("fieldA")} />
                </div>
                <div>
                    <label>Field B</label>
                    <input type="text" value={data.fieldB} onChange={this.onChange("fieldB")} />
                </div>
                <div>
                    <label>Field C</label>
                    <input type="text" value={data.fieldC} onChange={this.onChange("fieldC")} />
                </div>

                <div>
                    <button onClick={this.show}>Show</button>
                </div>
            </div>
        )
    }
}

var el = document.getElementById("root")
render(<App />, el)