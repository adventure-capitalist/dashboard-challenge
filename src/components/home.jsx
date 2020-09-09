import React, { Component } from 'react'
import Weather from './weather'
import News from './news'
import Sport from './sport'
import PhotoAlbum from './photoAlbum'
import Checklist from './checklist'
import Covering from './covering'

class Home extends Component {
    state = {  }

    greetingCalculator = () => {
        let rightNow = new Date();
        console.log(rightNow.getHours())
        if( 4 < rightNow.getHours() && rightNow.getHours() <= 11) {
            return "Morning"
        } else if (11 < rightNow.getHours() && rightNow.getHours() <= 16 ) {
            return "Afternoon"
        } else if (16 < rightNow.getHours() && rightNow.getHours() <= 19) {
            return "Evening"
        } else {
            return "Night"
        }
    }

    render() { 
        return ( 
            <>
            <div className="greeting"><button onClick={this.props.logMeOut}>Logout</button><h2 >Good {this.greetingCalculator()} {this.props.firstName}</h2><span>{" "}</span></div>
                <Weather/>
                <News/>
                <Sport/>
                <PhotoAlbum/>
                <Checklist/>
                <Covering/>
            </>
         );
    }
}
 
export default Home;