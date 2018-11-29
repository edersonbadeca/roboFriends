import React, { Component }  from 'react'
import Card from './Card'


class CardList  extends Component {


	constructor(props) {
			super(props);

		}

  render(){

    console.log(this.props.robots)
    const cardComponent = this.props.robots.map((user, index) =>
       <Card
         key={index}
         id={ this.props.robots[index].id }
         name={ this.props.robots[index].name }
         username={ this.props.robots[index].name }
         email={ this.props.robots[index].email }
         />
      )

      return (
      <div className='tc pd3'>
        {cardComponent}
      </div>
    )

  }
}

export default CardList
