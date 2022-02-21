import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    const { url } = media.data.attributes;
    const imageURL = url.startsWith('/') ? getStrapiURL(url) : url;

    return imageURL;
}