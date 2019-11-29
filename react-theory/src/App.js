import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ], 
      pageTitle: 'The best cars',
      pageSubtitle: 'Project for showing cars',
      showCars: 'false'
    }
  }
//another way for creating state:
  // state = {
  //   cars: [
  //     {name: 'Ford', year: 2018},
  //     {name: 'Audi', year: 2016},
  //     {name: 'Mazda', year: 2010}
  //   ], 
  //   pageTitle: 'The best cars',
  //   pageSubtitle: 'Project for showing cars',
  //   showCars: 'false'
  // }

  // changeTitleHandler = (newTitle) => {
    // const oldTitle = this.state.pageTitle
    // const newTitle = oldTitle + ' (chahged)'
    
  //   this.setState({
  //     pageTitle: newTitle 
  //   })
  // }
//другой способ создания этой функции
  //  changeTitleHandler = pageTitle => {
  //    this.setState({pageTitle})
  //  }

  // changeSubtitleHandler = (newSubtitle) => {
  //   this.setState({
  //     pageSubtitle: newSubtitle
  //   })
  // }
  // 

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    // console.log('Delete');
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})
  }

  // handleInput = (event) => {
    // console.log('Changed', event.target.value);
  //   this.setState({
  //     pageSubtitle: event.target.value
  //   })
  // }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  

  render() {

    let cars = null;//
    if (this.state.showCars) {
      cars = this.state.cars.map ((car, index) => {
        return(
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
            // onChangeTitle={() => this.changeTitleHandler(car.name)}
            //onChangeSubtitle={() => this.changeSubtitleHandler(car.name)}
            />
          )
      }) 
    }

    return (
      <div className="App">
        {/* <h1>{this.state.pageTitle}</h1> */}

        <h1>{this.props.title}</h1>

        <h2>{this.state.pageSubtitle}</h2>

        <button onClick={this.toggleCarsHandler}>
          Toggle cars
          </button>

        {/* <button
        onClick={this.changeTitleHandler.bind(this, 'Changed!')} 
        >Change title!

        </button> */}

        {/* <button onClick={this.changeSubtitleHandler.bind(this, 'Cars')}>
          Change subtitle
        </button> */}

      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
      }}>
        { cars }
      </div>
        
        
        {/* <Car 
          name={cars[0].name} 
          year={cars[0].year}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)} />
        
        <Car 
          name={cars[1].name} 
          year={cars[1].year}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)} />
          
        <Car 
          name={cars[2].name} 
          year={cars[2].year}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)} /> */}
      </div>
    );
  }
};

export default App;
