//import React from 'react'
import { useRouteError } from "react-router-dom"
const ErrorComponent = () => {

    const err=useRouteError();
  return (
    <div>ErrorComponent {err.status} {err.statusText}</div>
  )
}

export default ErrorComponent