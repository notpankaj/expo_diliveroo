import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "ceie46ot",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// run this to add exception for localhost 3000 CORS Policy
// $ sanity cors add http://localhost:3000 -> react.js
// $ sanity cors add http://localhost:19002 -> react native
export default client;
