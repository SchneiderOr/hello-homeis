import { compose, lifecycle } from "recompose";
import * as R from "ramda";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadGuides } from "../reducers/guides";
import Guides from "../components/Guides/guides";

// Format and pre-process the guides object (should be made on the server...)
const getGuidesData = state => {
  const guides = R.path(["guides", "payload", "data"], state);
  if (guides) {
    return R.map(
      guide => ({
        image: R.path(["actor", "media", "thumbnail"], guide), // Fake it from avatar since we dont have images attached to the actual object
        name: R.path(["actor", "name"], guide),
        title: R.path(["payload", "title"], guide),
        tags: R.path(["tags"], guide)
      }),
      guides
    );
  }
  return [];
};

export default compose(
  connect(
    state => ({
      isLoading: R.path(["guides", "isLoading"], state),
      data: getGuidesData(state)
    }),
    dispatch => ({ loadGuides: bindActionCreators(loadGuides, dispatch) })
  ),
  lifecycle({
    componentWillMount() {
      this.props.loadGuides();
    }
  })
)(Guides);
