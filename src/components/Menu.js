import React from 'react'
import '../styles/menu.css';

function Menu() {
    const menuItem = [
        {
            name: "Margherita",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/margherita.jpg?raw=true",
            price: "13.20"
        },
        {
            name: "Speciale",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pedrotechspecial.jpg?raw=true",
            price: "18.50"
        },
        {
            name: "Peperoni",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pepperoni.jpg?raw=true",
            price: "14.99"
        },
        {
            name: "Hawaii",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/pineapple.jpg?raw=true",
            price: "16.00"
        },
        {
            name: "Vegan",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/vegan.jpg?raw=true",
            price: "17.10"
        },
        {
            name: "Stagioni",
            image: "https://github.com/machadop1407/react-website-tutorial/blob/main/src/assets/expensive.jpg?raw=true",
            price: "14.00"
        }
    ];

  return (
    <div className='menu'>
                <h1 className='title'>Our Menu</h1>
            <div className='menuList'>
                {menuItem.map((menuItem) => {
                    return (
                        <div className='menuItem'>
                            <img src={menuItem.image}/>
                            <h1>{menuItem.name}</h1>
                            <p>${menuItem.price}</p>
                        </div>

                    );
                })}
            </div>
    </div>
  )
}

export default Menu