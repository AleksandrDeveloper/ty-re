import React, { Component, createRef } from 'react';


type TypeProps={
  title?:string
}
type typeState={
  counter:number
  focus:boolean
}


export default class App extends Component<TypeProps,typeState> {

  constructor(props:TypeProps){
    super(props)
    this.state={
      counter:0,
      focus:false
    }

  }
  private rootRef = createRef<HTMLButtonElement>()
 
  componentDidMount():void{
    console.log(this.rootRef.current);   
     
  } 
  shouldComponentUpdate(nextProps:TypeProps,nextState:typeState):boolean{
    return true 
  }

  handlerPlusCounter=(e:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(e.clientY);
    
    this.setState(prevState=>{
      return {counter:prevState.counter+1}
    })
  }
  hadlerInputElement=(e:React.FocusEvent<HTMLInputElement>)=>{
    console.log(e.target);
    
  }
  hadlerSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log('Submit');
    console.log(this.rootRef.current);  
    
  }
  

  render() {
    return (
      <div>
        <input type="text"  /> 
        <div >
          dfdfsf
        </div>
        <h1>{this.state.counter}  </h1>
 
        <button onClick={this.handlerPlusCounter} ref={this.rootRef}>+</button>
        <h3>{this.props.title} </h3>

        <form action="" onSubmit={this.hadlerSubmit}>
          <input type="text" onFocus={this.hadlerInputElement}/>
          <button type="submit">ff</button>
        </form>
      </div>
    )
  }
}
