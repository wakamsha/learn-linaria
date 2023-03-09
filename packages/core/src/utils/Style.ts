import { css } from '@linaria/core';

export function globalStyle() {
  return css`
    :global() {
      :root {
        font-family: Inter, system-ui, Helvetica, Arial, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: rgb(255 255 255 / 87%);
        background-color: #242424;
        color-scheme: light dark;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;

        &:hover {
          color: #535bf2;
        }
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        padding: 0.6em 1.2em;
        font-family: inherit;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        background-color: #1a1a1a;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: border-color 0.25s;

        &:hover {
          border-color: #646cff;
        }

        &:focus,
        &:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }
      }

      @media (prefers-color-scheme: light) {
        :root {
          color: #213547;
          background-color: #fff;
        }

        a:hover {
          color: #747bff;
        }

        button {
          background-color: #f9f9f9;
        }
      }
    }
  `;
}
