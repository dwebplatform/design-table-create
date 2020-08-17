import React, { useState } from 'react';
import {SubscribeTable} from './components/SubscribersTable';
import {Book} from './components/Book';
import './App.css';
 
function App() {
  
  const [curentId , setCurentId] = useState(1);
  const [data, setData] =useState({
    name:'',
    age:'',
    books:[ {
      id:1,
      subscribers:[
        {
          id:1,
          name:'Иван',
          status:'Дендрит',
        },
        {
          id: 2,
          name:'Семен',
          status:'Моноксид',

        }
      ],      
      relise_data:24,

      name:'Karoline'
    },
  {
    id: 2,
    subscribers:[
      {
        id:1,
        name:'Аркадий',
        status:'Вейнтрид',
      },
      {
        id: 2,
        name:'Петр',
        status:'Дозит',

      }
    ],
    relise_data: 2018,
    name:'Kitty and Rabbit'
  },
{
  id: 3,
  subscribers:[
    {
      id:1,
      name:'Иван',
      status:'Дендрит',
    },
    {
      id: 2,
      name:'Семен',
      status:'Моноксид',

    }
  ],
  relise_data: 2017,
  name:'Sammie and Rosy'
},
{
  id: 4,
  subscribers:[
    {
      id:1,
      name:'Карл',
      status:'Пироксид',
    },
    {
      id: 2,
      name:'Семен',
      status:'Динозороид',

    }
  ],
  relise_data: 2017,
  name:'The man with a dead case'
}]
  });

  

  const curentBook=(id)=>{
    return  data.books.find(el=>el.id===id);   
  }
  const handleBookChange=(id, e)=>{
    const copied_books = [...data.books];

    const findedIndex = copied_books.findIndex(el=>el.id===id);
    copied_books[findedIndex][e.target.name] = e.target.value;
    setData({
      ...data,
      books: copied_books
    });

  }

  const updateCurentIndex=(id)=>{
    setCurentId(id)
  }
  const {books} = data;
  return (
    <div className="app-container">
      <form className="form-container">      
        <div className="books">
        {
          books.map((item)=>{
            return <Book 
              key={item.id}
              {...item}
              updateCurentIndex={updateCurentIndex}
              handleBookChange={handleBookChange}
              not_allowed={['id']}
            />
          })
        }          
      <SubscribeTable  {...curentBook(curentId)}/>        
        </div>
  </form>

     </div>
  );
}

export default App;
