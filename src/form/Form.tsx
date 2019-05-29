import React, { ChangeEvent } from "react";

type State = {
    fieldA: string
    fieldB: string
    fieldC: string
    fieldD: string
}

type InputProps = { name: keyof (State) } &
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

class MyInput extends React.Component<InputProps> {
    constructor(props) { super(props) }
    render = () => <input {...this.props} />
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

    private onChange = (e: ChangeEvent<HTMLInputElement>) =>
        this.setState({ ...this.state, [e.target.name]: e.target.value })

    private onShow = (e) => console.log(this.state)

    private onClear = (e) => this.setState(this.defaultState)

    public render() {
        let s = this.state
        return (
            <div style={{ padding: "5px" }}>
                <div>
                    <label>Field A</label>
                    <MyInput name="fieldA" value={s.fieldA} onChange={this.onChange} />
                </div>
                <div>
                    <label>Field B</label>
                    <MyInput name="fieldB" value={s.fieldB} onChange={this.onChange} />
                </div>
                <div>
                    <label>Field C</label>
                    <MyInput name="fieldC" value={s.fieldC} onChange={this.onChange} />
                </div>
                <div>
                    <label>Field D</label>
                    <MyInput name="fieldD" value={s.fieldD} onChange={this.onChange} />
                </div>
                <div style={{ paddingTop: "5px" }}>
                    <button onClick={this.onShow}>Show</button>
                    <button onClick={this.onClear}>Clear</button>
                </div>
            </div>
        )
    }
}