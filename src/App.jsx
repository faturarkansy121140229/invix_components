import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Alert } from 'flowbite-react'
import { Card } from "flowbite-react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 className='text-black-500 text-4xl font-bold mb-6 font-poppins'>
        INVIX UI COMPONENTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
        <Card className="max-w-sm shadow-none hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >
            Pricing Sections
          </h5>
          <Card className="max-w-sm" imgSrc="/images/pricing.png">
          </Card>
        </Card>
      </div>
    </div>
  )
}

export default App
