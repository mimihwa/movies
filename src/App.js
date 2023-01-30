import React from 'react';


class App extends React.Component {
  state={
    isLoading:true,
    movies: [],
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false});
    },5000);
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div className="App">
        {isLoading ? 'Loading...':'We are ready'}
    </div>
    );
  }
}

export default App;

