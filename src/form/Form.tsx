import React, { ChangeEvent } from "react";

type State = {
    fieldA: string
    fieldB: string
    fieldC: string
    fieldD: string
}

type InputProps = { name: keyof (State) } &
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export class QInput extends React.Component<InputProps> {
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

    defaultState = {
        fieldA: "A",
        fieldB: "B",
        fieldC: "C",
        fieldD: "D"
    }

    constructor(props) {
        super(props)
        this.state = this.defaultState
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({ ...this.state, [name]: value })
    }

    onClick = (e) => {
        console.log(this.state)
    }

    onClear = (e) => {
        this.setState(this.defaultState);
    }

    public render() {
        let s = this.state
        return (
            <div style={{ background: "lightgrey", padding: "5px" }}>
                <div>
                    Field A
                    <QInput name="fieldA" value={s.fieldA} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field B
                    <QInput name="fieldB" value={s.fieldB} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field C
                    <QInput name="fieldC" value={s.fieldC} onChange={this.onChange}></QInput>
                </div>
                <div>
                    Field D
                    <QInput name="fieldD" value={s.fieldD} onChange={this.onChange}></QInput>
                </div>
                <div>
                    <button onClick={this.onClick}>Show</button>
                    <button onClick={this.onClear}>Clear</button>
                </div>
            </div>
        )
    }
}