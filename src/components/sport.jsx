import React, { Component } from 'react'
import * as d3 from 'd3'
import data from '../data/data.csv'

class Sport extends Component {
    state = { 
        team: "Atalanta",
        victims: [],
        data
     }
     changeListener = (e) => {
        this.getData();
        this.setState({ team: e.target.value });
      };
     
    getFeed = () => {
        let url = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fsport%2Ffootball%2Frss.xml%3Fedition%3Duk";
        fetch(url).then(response => response.json()).then(data => this.setState({ response: data.items[0]}))
    }

     
dataFiltration = async(data) => {
    let victims = [];

    await data.map(match => {
       
        if(match.HomeTeam === this.state.team && (parseInt(match.FTHG) > parseInt(match.FTAG))) {
           victims.push(match.AwayTeam)
        }
      else if(match.AwayTeam === this.state.team && (parseInt(match.FTAG) > parseInt(match.FTHG))) {
            victims.push(match.HomeTeam)
        }
    });

  
        let url = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fsport%2Ffootball%2Frss.xml%3Fedition%3Duk";
        await fetch(url).then(response => response.json()).then(response => this.setState({victims: victims, data: data, response : response}));
}
   

getData = () => {

    d3.csv(data).then((data) => {
        this.dataFiltration(data)
    }).catch(function(err) {
        throw err;
    })
}

componentDidMount() {
    this.getData();
}

    render() { 
        return ( <div className="card">
                    <h2>Sport</h2>
                        <h3><input onChange={this.changeListener} value={this.state.team}/></h3>
                            <p><strong>have beaten:</strong> {this.state.victims.join(", ")}</p>
                    <a href={this.state.response && this.state.response.items[0].link}>
                            <p>{this.state.response ? this.state.response.items[0].description : null}</p>
                    </a>
                            
                    
                </div>  
            );
    }
}
 
export default Sport;