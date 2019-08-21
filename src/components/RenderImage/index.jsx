import React, {Component} from 'react';
import {storage} from '../../firebase';
import { Image } from 'semantic-ui-react';


class RenderImage extends Component {
  async componentDidMount() {
    const {firstName, id} = this.props.contact;
    const url = await storage.ref('images').child(`${firstName}${id}`).getDownloadURL();
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