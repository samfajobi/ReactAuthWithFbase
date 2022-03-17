import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToolBar from '../../components/Navigations/ToolBar/ToolBar'
import Aux from '../hoc/hocAux'

class LayOut extends Component {
  render() {
    return (
      <Aux>
          <ToolBar isAuth={this.props.isAuthenticated}/>
          <main>
             {this.props.children}
          </main>
          
      </Aux>
    )
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null

    }
}


export default connect(mapStateToProps)(LayOut);
