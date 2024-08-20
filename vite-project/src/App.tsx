
import { TwitterFollowCard } from './components/twiterfollowcard'
import './App.css'

function App() {

  const formatUserName = (userName:string)=> `@${userName}`
  return (
    <>
      <div className="App">
        <TwitterFollowCard formatUserName={formatUserName} userName={"RionakAsume"} name={"RionakAsume"} />
        <TwitterFollowCard formatUserName={formatUserName} userName={"ImlauerPablo"} name={"ImlauerPablo"} />
     
      </div>
    </> 
  )
}

export default App
