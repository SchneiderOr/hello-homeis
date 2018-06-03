import { injectGlobal } from "styled-components";
import reset from "styled-reset";

export default injectGlobal`
  ${reset};
  body {
    font-family: 'Roboto';
    font-size: 16px;
  }
  p {
    line-height: 125%;
  }
`;
