import React from 'react'
import ReactDOM from 'react-dom/client'
import { styled } from "@material-ui/core"

const styles = {
  color: 'red',
  fontSize: 48,
  fontWeight: 600,
}

const Test1 = styled('div')(styles)

const Test2 = styled('div')(() => styles)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test1>styled(object)</Test1>
    <Test2>styled(() =&gt; object)</Test2>
  </React.StrictMode>,
)
