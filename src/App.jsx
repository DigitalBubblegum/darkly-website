// import { useState } from 'react'
import Card from './components/Card'
function App() {

  return (
    <div className='flex-col bg-slate-50 overflow-auto'>
      <div className='bg-blue-600 p-8'>
        <button className='bg-blue-800 rounded-full p-4 transform transition hover:translate-y-0.5 tr hover:bg-blue-900 active:bg-blue-950 shadow-lg active:translate-y-4'>night mode</button>
      </div>
      <div className='h-screen w-screen flex items-center justify-center'>
        <Card/>
      </div>
    </div>
  )
}

export default App
