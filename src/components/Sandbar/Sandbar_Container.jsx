import { connect } from 'react-redux';

import Sandbar from './Sandbar';




function mapStateToProps(state) {
  return (
      {
        frends: state.sandBarPage.frends,
         
      }
  )
}

const SandbarContainer  = connect( mapStateToProps)(Sandbar)
export default SandbarContainer