import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import MyName from './components/MyName'
import './main.scss'

const root = document.getElementById("app");

ReactDOM.render(<div><MyName/><App/></div>,root)