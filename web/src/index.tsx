import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

const MOUNT_NODE: HTMLElement | null = document.getElementById('app')

ReactDOM.render(<App />, MOUNT_NODE)
