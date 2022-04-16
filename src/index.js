import React from 'react';
import ReactDOM from 'react-dom';
import Store from './bd/bd';
import './index.css';
import App from './App';




// главная функция которая рендерит всё приложение которая получает объек Store в 
// параметры из файла bd
// Store это бъек база даных с информацией и методами управления ей
// потом передаёт этот объект компаненте App через параметры  так называемые пропсы
const funMainRender = (_State) => {

  ReactDOM.render(
    <React.StrictMode>
      {/* функция компонента App по сути и есть всё приложение она получает объект Store.getState этот
  метод возращает  внутрений обьект _State обекта Store
   из параметров родительской функции funMainRender которое её рендерит.
функиональная компонента App берёт два свойсва у объекта Store через атрибуты
 1# свойство база даных объект  _State со свойством 
 обект Arrtext со свойством  _arrText масиф c индоксами безымяных обьектов {}
2# метод dispatch который которы принемает в пораметры объект action 
потом сравнивает свойство action.type и взависимости от условия if вызывает ту или иную функцию 

*/}
      <App  withPictureOf="cats"  State={_State} dispatch={Store.dispatch.bind(Store)} />

    </React.StrictMode>,
    document.getElementById('root')
  );
};

// запуск главной функции 
funMainRender(Store.getState());
//функция getFunMainRender это ресстарт главной функции funMainRender с обновлёнами данами 
Store.getFunMainRender(funMainRender);


//export default funMainRender;