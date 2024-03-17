import './App.css'
import Header from './Components/Header/Header'
import OurRecipe from './Components/Our-Recipe/OurRecipe'

function App() {

  return (
    <>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <Header></Header>
        <OurRecipe></OurRecipe>
      </div>
    </>
  )
}

export default App
