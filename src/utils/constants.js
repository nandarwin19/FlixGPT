// When API changes, we always have to change all api wherever you use. So it better to put it in the constant.js. If so, we need not change everywhere we use
export const USER_AVATAR =
  "https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const GPTBG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/90e66629-1911-451d-aa9c-5406ed962c45/MM-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "burmese", name: "Burmese" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_GPT_KEY = process.env.REACT_APP_OPENAI_KEY;
