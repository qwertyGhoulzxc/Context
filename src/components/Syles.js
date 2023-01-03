import styled from "styled-components";

export const ListElem = styled.li`
background: white;
color: black;
  margin: 3px;
  display: flex;
  justify-content: space-between;


`
export const Button = styled.button`

    text-decoration: none;
  text-align: center;
    display: inline-block;
    margin: 2px 4px;

    overflow: hidden;
    border: 2px solid;
    border-bottom-width: 4px;
    font-family: 'Montserrat', sans-serif;

  font-size: 15px;



    background: rgba(255, 255, 255, 1);
    transition: color .3s, background .5s;
  
:hover {
    animation: stripes .75s infinite linear;
    background: linear-gradient(45deg, black 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 50%, black 50%, black 75%, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 1));
    background-size: 10px 10px;
    color: #FF50E5;
  }
  @keyframes stripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 0;
    }
  }
`

export const List = styled.ul`
  background: crimson;
  padding-inline-start: 0px;
  list-style: none;
width: 300px;
border:1px solid black;
`

export const StyledForm = styled.form`
width: 300px;
    border: 1px solid black;

`
export const Flex = styled.div`
display: flex;
  justify-content: space-between;
`
