
import './App.css'
import LeftMenu from './components/header/left-menu'
import Search from './components/header/search'
import LeftNav from './components/main/left-nav'

function App() {

  return (
    <div className="App">

      <header className="header">
        <LeftMenu />
        <Search />
      </header>
      <LeftNav />
      <main className="email-view">

      </main>

      <footer>

      </footer>

    </div>
  )
}

export default App
