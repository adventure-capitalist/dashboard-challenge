import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';

class PhotoAlbum extends Component {
    state = { 
        image: [],
     }

     resizeFile = (file) => new Promise(resolve => {
        Resizer.imageFileResizer(file, 280, 280, 'JPEG', 100, 0,
        uri => {
          resolve(uri);
        },
        'base64'
        );
    });

    upload = async(event) => {
        const photo = await this.resizeFile(event.target.files[0]);
        console.log(photo)
        this.setState({image: [...this.state.image, photo]})
        }

    render() { 
        console.log(this.state.image)
        return ( 
            <div className="card">
                <h2>Photos</h2>
                <div>
                    Upload your photos:{" "}
                    <input type="file" multiple={true} accept="image/*" onChange={this.upload} />
                        <div>
                            {this.state.image.map(i => (
                                <img alt="" src={i}/> ))}
                        </div>
                </div>

        </div> );
    }
}
 
export default PhotoAlbum;