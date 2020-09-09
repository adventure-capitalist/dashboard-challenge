import React, { Component } from 'react';
class News extends Component {
    state = { 
        response: {}
     }

    getFeed = () => {
        let url = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml";
        fetch(url).then(response => response.json()).then(data => this.setState({ response: data.items[0]}))
    }

    componentDidMount = () => {
        this.getFeed();
    }
    render() { 
        return ( <div className="card">
                    <a href={this.state.response.link}>
                        <h2>News</h2>
                            <p>{this.state.response.title}</p>
                            <p>{this.state.response.description}</p>
                    </a>
                 </div>
         );
    }
}
 
export default News;