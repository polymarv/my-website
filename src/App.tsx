import reactLogo from './assets/react.svg'
import GithubLogo from './assets/github.png'
import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-row items-center gap-4'>
        <h1 className='order-1'>This site was made with</h1>
        <a href="https://react.dev" target="_blank" className='order-2'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='flex justify-center'>
        <a href="https://github.com/polymarv" target="_blank">
          <img src={GithubLogo} className="logo" alt="Github Logo" />
        </a>
      </div>
    </>
  )
}

export default App
