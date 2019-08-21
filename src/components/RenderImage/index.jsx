import React, {Component} from 'react';
import {storage} from '../../firebase';
import { Image } from 'semantic-ui-react';


class RenderImage extends Component {
  async componentDidMount() {
    const url = await storage.ref('images').child(`${this.props.contact.firstName}`).getDownloadURL();
    this.setState({url})
  }

  state = {
    url: ''
  }

  render() {
    return (
      <Image avatar src={this.state.url}/>
    )
  }
}

export default RenderImage;