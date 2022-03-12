import qs from "qs";

/**
 * Get full API URL from path
 * @param {string} path Path to query
 * @returns {string} Full API URL
 */
export function getStrapiURL(path = "") {
  return `${process.env.API_URL}${path}`;
}

/**
 * GET call to the API
 * @param {string} path Path to query
 * @param {Object} urlParamsObject URL params
 * @param {Object} options Fetch options
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  
  const requestURL = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  const response = await fetch(requestURL, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error("An error occured, please try again.");
  }

  const data = await response.json();
  return data;
}
