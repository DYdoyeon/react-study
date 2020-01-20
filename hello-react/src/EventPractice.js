import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  };

  //1.
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.state({
      message: e.target.value
    });
  }
  handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }
  //2.
  handleChange2 = e => {
    this.Setstate({
      message: e.target.value
    });
  };
  handleClick2 = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={e => {
            this.setState({
              message: e.target.value
            });

            console.log(this.state.message);
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}
export default EventPractice;
