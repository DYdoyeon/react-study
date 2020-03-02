import React, { Component } from "react";
import Colorcontext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColorsClass extends Component {
  static contextType = Colorcontext;
  handleSetColor = color => {
    this.context.actions.setColor(color);
  };
  handleSetSubColor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  };
  render() {
    return (
      <div>
        <h2>색상을 선택하세요</h2>
        <div style={{ display: "flex" }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer"
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                // 마우스 오른쪽 버튼
                e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 막음.
                this.handleSetSubColor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
export default SelectColorsClass;
