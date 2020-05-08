import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import NavigationBar from "./Navbar";

class Main extends Component {
  //dishId = null;

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  setSelectedDish(dish) {
    this.setState({ selectedDish: dish });
  }

  showDish(dish) {
    console.log(dish);
  }

  render() {
    this.showDish(this.state.selectedDish);
    return (
      <div className="container">
        <NavigationBar />
        <Menu
          dishes={DISHES}
          setSelectedDish={(dish) => this.setSelectedDish(dish)}
        />
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Main;
