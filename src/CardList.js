import React, { Component }  from 'react';
import Card from './Card';


class CardList  extends Component {


  render(){

    const robots = this.props.robots;
    const cardComponent = robots.map((user, index) =>
       <Card
         key={index}
         id={ robots[index].id }
         name={ robots[index].name }
         username={ robots[index].name }
         email={ robots[index].email }
         />
      )

      return (
      <div className='tc pd3'>
        {cardComponent}
      </div>
    )

  }
}

export default CardList;
