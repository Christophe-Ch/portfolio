import { fetchAPI } from "../../lib/api";
import RichContentLayout from "../../components/richContentLayout";

export default function article({ article }) {
  return <RichContentLayout content={article} />;
}

export async function getStaticPaths() {
  const result = await fetchAPI("/articles");

  return {
    paths: result.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const result = await fetchAPI(`/articles`, {
    slug: params.slug,
  });

  const article = result.data[0].attributes;

  const formatted = {
    title: article.title,
    body: article.content,
  };

  return {
    props: {
      article: formatted,
    },
  };
}
