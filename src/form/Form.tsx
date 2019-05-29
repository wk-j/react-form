import React, { ChangeEvent } from "react";

type State = {
    fieldA: string
    fieldB: string
    fieldC: string
    fieldD: string
}

export class QInput extends React.Component<{ name: keyof (State) } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> {
    constructor(props) {
        super(props)
    }
    public render() {
        return (
            <input {...this.props} />
        )
    }
}

export class Form extends React.Component<{}, State> {

    constructor(props) {
        super(props)
        this.state = {
            fieldA: "A",
            fieldB: "B",
            fieldC: "C",
            fieldD: "D"
        }
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        let state = { ...this.state, [name]: value }
        this.setState(state)
    }

    onClick = (e) => {
        console.log(this.state)
    }

    public render() {
        return (
            <div style={{ background: "lightgrey", padding: "5px" }}>
                <div>
                    Field A <QInput name={"fieldA"} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field B <QInput name={"fieldB"} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field C <QInput name={"fieldC"} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field D <QInput name={"fieldD"} onChange={this.onChange}></QInput>
                </div>
                <div>
                    <button onClick={this.onClick}>Show</button>
                </div>
            </div>
        )
    }
}