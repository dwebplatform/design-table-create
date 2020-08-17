import React from 'react';
import './styles.css'
export const SubscribeTable=({subscribers})=>{
    return (
    <div className=" table-container">
            <div className=" table-container-item table-container-item__first"
            
            > 
            <ul className="list-group table-container-item__first-el "  
               >
             {
                 subscribers.map((item)=>{
                 return <li className="list-group-item" key={item.id}>{item.name}</li>;
                 })
             }
             </ul>
             </div>
        <div className="table-container-item  table-container-item__second">
        <div className="bordinger">
        
        <div className="bordinger"> 
        <div className="table-container-item__second-header">
            <h5 className="table-container-item__second-header-title">Добавить</h5>
        <button type="text" className="btn btn-success btn-lg btn-circle">+</button>
        </div>
        </div>
        <div className="table-container-item__second-body">
            <div className="bordinger"> 
            <div className="table-container-item__second-body-item">
                <label className="table-container-item__second-body-item-label">Название:</label>
                <input className="form-control" type="text"
                />
            </div>
            <div className="table-container-item__second-body-item">
                <label className="table-container-item__second-body-item-label">Год издания:</label>
                <input className="form-control" type="text" />
            </div>
        </div>         
        </div>
        </div>
        </div>
    </div>
);
}