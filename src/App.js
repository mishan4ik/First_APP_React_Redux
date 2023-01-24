import React from "react"
import {connect} from "react-redux"
import './App.css';

function App(props) {

  let Trackinp = React.createRef()

  let func = () =>{

      console.log("Track",Trackinp.value)
      props.onAddTrack(Trackinp.value);
      Trackinp.value = "";

  }

  return (
    <div className="App">
      <input type="text" ref = {(inp) => {Trackinp = inp}} />
      <button onClick={func}>+</button>
      <ul>
        {props.testStore.map((track,index)=><li key = {index}>{track}</li>)}
      </ul>
    </div>
  );
}

export default connect(

  state => ({

    testStore:state

  }),
  dispatch =>({

    onAddTrack:(TrackName) => {

      dispatch({type:"ADD_TRACK",payload:TrackName})

    }

  })

)(App);
