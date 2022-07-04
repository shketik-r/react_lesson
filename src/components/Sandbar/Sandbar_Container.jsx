
import Sandbar from './Sandbar';


function SandbarContainer(props) {
  let state = props.store.getState()

  return (<Sandbar
  frends={state.sandBarPage.frends}

  />)


}
export default SandbarContainer