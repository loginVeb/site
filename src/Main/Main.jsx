
import React from 'react';
// import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Enter from './Enter/Enter';

const StMain = styled.main`
grid-area: 3/1/13/13;
${'' /* border: solid 2px #93eae0; */}
font-size: 10px;
color: red;
text-align:center;
background:#4682B4;

  display: grid;
  grid-template-columns:repeat(12, 8.333%); 
  grid-template-rows:repeat(12, 8.333%); 

`
const SPravila = styled.div`
grid-area: 1/1/8/13;
${'' /* border: solid 2px #93eae0; */}
font-size: 20px;
color: #6d399e;
text-align:center;
font-family: 'DSMosterWoff2';

`

const Main = (props) => {
debugger
    return (
        <StMain>

            <SPravila>
                Планирую макияж до тех пор, пока льву не понадобится либеро.
                Изготовление моркови и диаметра автомобилей, элемент моркови, но оно того стоит.
                Никто не должен освобождать malesuada Morbi lorem. Quisque velit nisi, pretium ut lacinia in, ибо это элемент.
                Бананы сядут крупнейшим проявителем, для tincidunt нужна подушка.
                Присутствовать сапиен-масса, ни долина, от детишек не могло, только надобно.
                Нет разработчиков уровня авиакомпаний. Никто не должен освобождать malesuada Morbi lorem.
                Перед самым первым баскетбольным мячом их пасть горе и клиническая забота; К сожалению, он не будет, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Он сказал мне, что не так много игроков могут Curabitur eget quis et.
                Присутствовать сапиен-масса, ни долина, от детства, могла только необходимость.
                Изготовление моркови и диаметра автомобилей, элемент моркови, но оно того стоит.
                Присутствовать сапиен-масса, ни долина, от детишек не могло, только надобно. Lorem ipsum dolor sit amet, conctetur adipiscing elit.
                Класс не знал, как dui posuere blandit.
            </SPravila>

            <Enter props={props}/>
               
        </StMain>
    );
};

export default Main;