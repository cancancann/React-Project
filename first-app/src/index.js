import React from 'react';
import  ReactDOM  from 'react-dom';

class AccordionMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        contentVisible: true
      };
      // bind event handler methods here (defined below) for callback to work
      this.toggleContentVisible = this.toggleContentVisible.bind(this);
    }
  
    toggleContentVisible() {
      // called at onClick of accordion button
      // toggles contentVisible between true and false
      this.setState((prevState) => {
        return { contentVisible: !prevState.contentVisible };
      });
    }
  
    render() {
      return (
        <div className="accordion_container">
          <div className="accordion">
            {/* when button clicked, toggle the contentVisible value in our state*/}
            <button
              type="button"
              className="accordion_title"
              onClick={this.toggleContentVisible}
            >
              Accordion Menu
            </button>
          </div>
          {/* For the below Div hide / show:
              Using string literals, and a ternary if check on our states contentVisible value,
              we append the .show_content CSS class if contentVisible === true
              else we append the empty string if contentVisible === false
              Note: We are just combining multiple CSS classes here to create different effects
              Same as how we use CSS class combination in regular web pages to create visuals.
          */}
          <div
            className={`accordion_content ${
              this.state.contentVisible ? "show_content" : ""
            }`}
          >
            <div className="list_item_container">
              <p>Item 1</p>
            </div>
            <div className="list_item_container">
              <p>Item 2</p>
            </div>
            <div className="list_item_container">
              <p>Item 3</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<AccordionMenu />, document.getElementById("root"));
  