import { compose, lifecycle } from "recompose";
import * as R from "ramda";

import parse from "react-html-parser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadGuides } from "../reducers/guides";
import Guides from "../components/Guides/guides";

const getGuidesData = state => {
  const guides = R.path(["guides", "payload", "data"], state);
  if (guides) {
    console.log(guides);
    return R.map(
      guide => ({
        name: R.path(["actor", "name"], guide),
        image: R.path(["payload", "media", "url"], guide),
        title: R.path(["payload", "title"], guide),
        tags: R.path(["tags"], guide)
      }),
      guides
    );
  }
  return {};
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
