import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';

//function App() {
  //lets change from functional to class components
  // class components are the way to build components
  class App extends React.Component{
    
    state ={name:"naren ",email:"narenrr@yahoo.com",age:30}

    render(){
      let x =this.state;
    return(
      <div className="App">

  
          <p>
            Edit <code>src/App.js</code> Welcome to this React tutorial now i have become classy
           <br/> Welcome {this.state.name } ,your email is {this.state.email}
           <br/> and age is {this.state.age}
          </p>
          <p> This is Parent component</p>
       {/* <App1 params ={this.state}/> --*/}
          <App1  {...x}/>
        
       
      </div>
    );
    }

  }
  export default App;
 /* return(
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> Welcome to this React tutorial
        </p>
      
      </header>
    </div>
  );*/

