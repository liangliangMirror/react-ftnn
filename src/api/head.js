import { connect } from 'react-redux';
function LR(type, value) {
    console.log(this)
}

export default connect(state => state)(LR);