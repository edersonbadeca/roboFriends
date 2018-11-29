import React, { Component }  from 'react'
import Card from './Card'


class CardList  extends Component {


	constructor(props) {
			super(props);
      this.robots = props.robots

		}

  render(){
    const cardComponent = this.robots.map((user, index) =>
       <Card
         key={index}
         id={ this.robots[index].id }
         name={ this.robots[index].name }
         username={ this.robots[index].name }
         email={ this.robots[index].email }
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
