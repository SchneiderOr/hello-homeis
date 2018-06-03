import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid as BaseGrid } from "react-styled-flexboxgrid";

import Header from "./components/Header/header";
import Seperator from "./components/Separator/separator";

const MainGrid = styled(BaseGrid)`padding: 2rem 6rem;`;
const HeaderGrid = styled(BaseGrid)`padding: 2rem 6rem;`;
class App extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <HeaderGrid>
          <Header />
        </HeaderGrid>
        <Seperator height="1px" />
        <MainGrid>{this.props.children}</MainGrid>
      </div>
    );
  }
}

export default App;
