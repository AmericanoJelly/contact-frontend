import React from 'react'

interface Composition {
  Title:React.FC<{children:React.ReactNode}>;
}

const Title:React.FC<{children:React.ReactNode}>=({children}) => (
  <h1 className='appContainer--title'>{children}</h1>
)

const AppContainer:React.FC<{children:React.ReactNode}> & Composition = ({children}) =>{
  return (
    <div className='appContainer'>{children}</div>
  )
}
AppContainer.Title = Title;

export default AppContainer