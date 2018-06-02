import { compose, lifecycle, withProps } from "recompose";
import * as R from "ramda";
import {
  format,
  distanceInWords,
  formatDistance,
  formatRelative,
  subDays
} from "date-fns";

import parse from "react-html-parser";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { withStyles } from "@material-ui/core/styles";

import { loadGuides } from "../reducers/guides";
import Guides from "../components/Guides";

const getGuidesData = state => {
  const guides = R.path(["guides", "payload", "data"], state);
  if (guides) {
    return R.map(
      guide => ({
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
      }),
      guides
    );
  }
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
