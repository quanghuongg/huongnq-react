import React from 'react';

class Plus extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            firstNumber : 0,
            secondNumber : 0
        };
    }

    update = (name, e) => {
        this.setState({ [name]: e.target.value });
    }

    getTotal = () => {
        return (parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber));
    }

    render(){
        return(
            <div className="form-group w-50 m-auto pt-3">
                <h4>Bé tập tính</h4>
                <input className="form-control w-25 d-inline-block" type="number" value={this.state.firstNumber} onChange = {(e) => this.update("firstNumber",e)}></input>
                <span> + </span>
                <input className="form-control w-25 d-inline-block" type="number" value={this.state.secondNumber} onChange = {(e) => this.update("secondNumber",e)}></input>
                <span> = {this.getTotal()}</span><span></span>
            </div>
        );
    }
}

export default Plus;