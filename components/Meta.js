import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "My Portfolio",
  keyword: "Web development programming",
  description: "Get all the necessary information about me",
};

export default Meta;
