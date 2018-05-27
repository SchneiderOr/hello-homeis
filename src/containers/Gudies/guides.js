import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadGuides } from "../../reducers/guides";
function mapStateToProps(state) {
  return { guides: state.guides };
}

function mapDispatchToProps(dispatch) {
  return {
    loadGuides: bindActionCreators(loadGuides, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
