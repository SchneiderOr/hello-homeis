import { compose, lifecycle } from "recompose";
import * as R from "ramda";
import { formatDistance } from "date-fns";

import parse from "react-html-parser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loadGuide } from "../reducers/guide";
import Guide from "../components/Guide/guide";

const getGuideData = state => {
  const guide = R.path(["guide", "payload", "data", "post"], state);
  if (guide) {
    return {
      avatar: R.path(["actor", "media", "thumbnail"], guide),
      name: R.path(["actor", "name"], guide),
      eventTime: formatDistance(
        new Date(R.path(["eventTime"], guide)),
        new Date(),
        {
          addSuffix: true
        }
      ),
      image: R.path(["payload", "media", "url"], guide),
      title: R.path(["payload", "title"], guide),
      body: parse(R.path(["payload", "text"], guide))
    };
  }
  return {};
};

export default compose(
  connect(
    state => ({
      isLoading: R.path(["guide", "isLoading"], state),
      data: getGuideData(state)
    }),
    dispatch => ({ loadGuide: bindActionCreators(loadGuide, dispatch) })
  ),
  lifecycle({
    componentWillMount() {
      this.props.loadGuide();
    }
  })
)(Guide);
