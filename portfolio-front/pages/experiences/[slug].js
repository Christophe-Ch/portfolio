import { fetchAPI } from "../../lib/api";
import RichContentLayout from "../../components/richContentLayout";
import { useEffect } from "react";

export default function Experience({ experience }) {
  return <RichContentLayout content={experience} />;
}

export async function getStaticPaths() {
  const result = await fetchAPI("/experiences");

  return {
    paths: result.data.map((experience) => ({
      params: {
        slug: experience.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const result = await fetchAPI(`/experiences`, {
    filters: { slug: params.slug },
  });

  const experience = result.data[0].attributes;

  const formatted = {
    title: experience.company,
    body: experience.content,
  };

  return {
    props: {
      experience: formatted,
    },
  };
}
