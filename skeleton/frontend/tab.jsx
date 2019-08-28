import React from 'react';

export default class Tab extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      index: 0,
      content: ""
    };
  }

  render() {
    let content
    return (
      <div class="tabs">
    <header class="headers">
      <ul class="tablist">
        
        { this.props.tabs.map ((tab, idx) => {
          return (
          
            <h1 class="tab" onClick={(e) => { this.selecting(e, idx) }}>{tab.title}</h1>
          
        )} )}
        
      </ul>
    </header>
    <article> {this.props.tabs[this.state.index].content}</article>
    </div>
    )}

    selecting(e, idx) {
      this.setState({ index: idx })
     

      let tabs = document.querySelectorAll('.tab')
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("selected")
      }

      e.target.classList.add("selected")

    }

}