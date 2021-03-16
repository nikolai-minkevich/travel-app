import React from "react"
import { withAuth} from "./Components/AuthComponent/index.js"
import {Redirect, Route} from "react-router-dom"

export const PrivateRoute = withAuth(({component: RouteComponent, isAuthorised, ...rest})=>(
<Route {...rest} render = {routerProps =>(
    isAuthorised? <RouteComponent {...routerProps}/>:<Redirect />
)}/>
))