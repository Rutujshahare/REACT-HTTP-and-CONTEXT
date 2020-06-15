import  React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }
    }
    counterIncrement=()=> {
        this.setState({
      count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <h2>this is a counter Component</h2>
                <button onClick={this.counterIncrement}>count {this.state.count}</button>
            </div>
        )
    }
}
export default CounterComponent