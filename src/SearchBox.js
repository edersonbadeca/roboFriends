import React, {Component} from 'react'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.SearchChange = props.SearchChange
  }
  render(){
    return (
    <div className='pa2'>
      <input
        className='pa3 pa b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={this.SearchChange}
      />
    </div>
    )
  }
}


export default SearchBox
