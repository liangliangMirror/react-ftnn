import { connect } from 'react-redux';

function head($this) {
    console.log(this)
}
connect(state => state)(head)
export default head;