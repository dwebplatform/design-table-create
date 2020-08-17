import React from 'react';
import './styles.css';

export const Book=({id, name, relise_data,handleBookChange, updateCurentIndex })=>{
    return (<div className="books-item"
                onClick={()=>updateCurentIndex(id)}
    >
              <div className="bordinger"> 
                  <div className="books-item-input" >

                      <label className="books-item-input-title">Название:</label>
                      <input className="books-item-input-body"
                       value={name}
                       name="name"
                       onChange={(e)=>{
                        handleBookChange(id, e)
                       }}
                       type="text"/>          
                  </div>
                  <div className="books-item-input">
                      <label className="books-item-input-title">Год издания:</label>
                      <input className="books-item-input-body" type="text"
                        value={relise_data}
                        name="relise_data"
                        onChange={(e)=>{handleBookChange(id, e)}}
                      />          
                  </div>
              </div>
          </div>);
  }