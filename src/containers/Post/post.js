import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadPost } from "../../reducers/post";
function mapStateToProps(state) {
  return { post: state.post };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPost: bindActionCreators(loadPost, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
