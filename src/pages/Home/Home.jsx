import './Home.scss'
import SideBar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widgets/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
const Home = () => {
  return (
    <div className='home'>
      <SideBar/>
      <div className='main'>
      <Navbar/>
      <div className='widgets'>
        <Widget type = "user"/>
        <Widget type="order"/>
        <Widget type="earning" />
        <Widget type = "balance"/>
      </div>
      <div className = 'charts'>
      <Featured/>
      <Chart/>
      </div>
      </div>
    </div>
  )
}

export default Home