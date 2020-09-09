import React, { Component } from 'react';
import PieChart from "./piechart";
import * as data from "../data/clothing-api.json";

class Covering extends Component {

    state = { 
        data: [],
      
    }


    getData = () => {
        let tempObject = {
            blazer: 0,
            hoodie: 0,
            jacket: 0,
            jumper: 0,
            sweater: 0,
            raincoat: 0
        }
        let tempArray = [];
        data.payload.map(item => {
           tempObject[item.clothe]++
         });
        Object.keys(tempObject).map((key, index)=> {
            let colors = ["red", "orange", "yellow", "green", "blue", "purple"]
           tempArray.push({name: key, value: tempObject[key], color: colors[index]})
        })
    this.setState({data: tempArray})
    }

    componentDidMount = () => {
        this.getData()
    }

    render() { 
        console.log(this.state)

		return (
            <div className="card">
                <h2>Clothes</h2>
                    <PieChart data={this.state.data} size="100" thickness="15"/>
                    {this.state.data.map(item => <div className="colors">{item.name} : {item.color}</div>)}
             </div>
		);
	}
           
}
export default Covering;