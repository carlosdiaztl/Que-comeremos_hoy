import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { actionGetrestaurantesAsync } from '../../redux/actions/restaurantsActions'
import { actionLogout, actionUserLogOutAsync } from '../../redux/actions/userActions'
import './style.scss'
const Home = ({ isAuthentication }) => {
const lista=["pizzas juan","pizza picolo","pizza carlota","carlos pizza","pizza picolo",
"pizza dominos","pizza daikmaku"," pizza lauras", " kakos pizza"]
const[dado, setDado]=useState(false)  
const [userFunctions,setUserFunctions]=useState(false)
const disptach=useDispatch()
const userStore = useSelector((store) => store.userStore);
const {restaurantes}=useSelector((store)=>store.restaurantStore)
const navigate=useNavigate()
const logOut=()=>{
  disptach(actionUserLogOutAsync())
}

useEffect(() => {
  
  if (isAuthentication) {
    setUserFunctions(true)
    
  }else{
    setUserFunctions(false)
  }
  
}, [isAuthentication,userFunctions])

  // useEffect(() => {
  // console.log(userStore);
  // if (!userStore.name) {
  
  //   navigate('/login')
  //   console.log(userStore.name);
  // }
  // }, [userStore])
 
  useEffect(() => {
    if (!restaurantes.length) {
      disptach(actionGetrestaurantesAsync())
   console.log(restaurantes);
    }
   
   
  }, [restaurantes])
 
console.log(restaurantes);
  useEffect(() => {
    console.log(userStore);
   
  }, [userStore])
  
  
  const changeDado=()=>{
    setDado(true);
    setTimeout(() => {
      const x = Math.floor(Math.random() * lista.length);
      console.log(x);
      const y = lista.at(x);
      console.log(y);
      Swal.fire("tu restaurante sera", `${y}`, "info");
    }, 1000);

    setTimeout(() => {
      setDado(false);
    }, 2000);
  
  }
  return ( 
    <> 
    <div className="contenedor">
    {dado? <div   className={"dado"} >
      <div className="lado uno"></div>
      <div className="lado dos"></div>
      <div className="lado tres"></div>
      <div className="lado cuatro"></div>
      <div className="lado cinco"></div>
      <div className="lado seis"></div>
    </div>:<div  onClick={changeDado} className={"dados"} >
      <div className="lado uno"></div>
      <div className="lado dos"></div>
      <div className="lado tres"></div>
      <div className="lado cuatro"></div>
      <div className="lado cinco"></div>
      <div className="lado seis"></div>
    </div>}
   
  </div>
   { isAuthentication?<button onClick={logOut}> salir</button>:""}
   {isAuthentication && userStore.admin ?<div>
   <button > Add restaurant</button>
   <button > Edit restaurant</button> </div>:"" }
   {isAuthentication && !userStore.admin ?<div>
   <button > Favoritos</button>
    </div>:"" }
{isAuthentication?userStore.displayName:""}
{isAuthentication?"":<Link to={'/login'} >Ingresar </Link>}
    
    </>
  )
}

export default Home