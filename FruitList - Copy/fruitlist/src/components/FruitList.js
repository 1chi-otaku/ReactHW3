import React from 'react'
import Fruit from './Fruit';

function FruitList() {

    const fruits = [
        {
          name: 'Blueberry',
          calories: 57,
          color: 'blue',
          image: './fruits/blueberry.jpg'
        },
        {
          name: 'Blackberry',
          calories: 43,
          color: 'black',
          image: './fruits/blackberry.jpg'
        },
        {
          name: 'Apple',
          calories: 52,
          color: 'red',
          image: './fruits/apple.jpg'
        },
        {
          name: 'Orange',
          calories: 47,
          color: 'orange',
          image: './fruits/orange.jpg'
        },
        {
          name: 'Pineapple',
          calories: 50,
          color: 'yellow',
          image: './fruits/pineapple.jpg'
        },
        {
          name: 'Mango',
          calories: 60,
          color: 'yellow',
          image: './fruits/mango.jpg'
        },
        {
          name: 'Pear',
          calories: 57,
          color: 'green',
          image: './fruits/pear.jpg'
        },
        {
          name: 'Grapes',
          calories: 69,
          color: 'purple',
          image: './fruits/grapes.jpg'
        },
      ];

      let FruitsElement = fruits.map( item => <Fruit fruit={item} />)


      
    
    return (
        <>
        <div className='row'>{FruitsElement}</div>
        </>
    )
}

export default FruitList
