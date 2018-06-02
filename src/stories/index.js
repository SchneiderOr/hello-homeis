import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Logo from "../components/Logo/logo";

storiesOf("Brand", module).add("Logo", () => <Logo />);
