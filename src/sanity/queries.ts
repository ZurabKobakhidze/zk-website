export const projectsQuery = `*[_type == "project"]{
  _id,
  title,
  description,
  tags,
  url,
  github,
  "image": image.asset->url
}`;
