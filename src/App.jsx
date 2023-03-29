import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import New from './pages/New/New'
import Single from './pages/Single/Single'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element = {<Home/>} />
        <Route path='login' element = {<Login/>} />
        <Route path = 'user'>
        <Route index element = {<List/>} />
        <Route path=':id' element = {<Single/>} />
        <Route path = 'new' element = {<New/>} />
        </Route>
        <Route path = 'product'>
        <Route index element = {<List/>} />
        <Route path=':id' element = {<Single/>} />
        <Route path = 'new' element = {<New/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
