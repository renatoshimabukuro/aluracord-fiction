// criacao de uma funcao global
function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}


//função do Next https://nextjs.org/docs/advanced-features/custom-app
export default function MyApp({ Component, pageProps }) {
  console.log("Roda em todas as páginas");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
