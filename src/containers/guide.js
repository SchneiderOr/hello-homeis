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

import { loadGuide } from "../reducers/guide";
import Guide from "../components/Guide/guide";

const styles = {
  card: {
    maxWidth: 480
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

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
};

export default compose(
  connect(
    state => ({
      isLoading: R.path(["guide", "isLoading"], state),
      data: getGuideData(state)
    }),
    dispatch => ({ loadGuide: bindActionCreators(loadGuide, dispatch) })
  ),
  withProps(ownProps => ({
    styles
  })),
  lifecycle({
    componentWillMount() {
      this.props.loadGuide();
    }
  })
)(Guide);
