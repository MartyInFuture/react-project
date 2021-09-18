import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.list, ul {
  list-style: none;
}

button {
  cursor: pointer;
}

body {
  margin: 0;
  font-family: Montserrat,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;
  /* overflow-x: hidden; */
}
`;
