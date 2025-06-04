import axios from "axios";

const API_BASE_URL = "https://dev.rewash.store/api";

function getAxiosInstance(locale = "ar") {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Cache-Control": "no-cache",
      Accept: "application/json",
      "Accept-Language": locale,
    },
  });
}

export async function fetchWashingPlans(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/washing_plans");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch washing plans");
}

export async function fetchHomeHero(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/hero");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home hero");
}

export async function fetchHomeFeatures(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/features");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home features");
}

export async function fetchHomeAbout(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/about");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home about");
}

export async function fetchHomeTestimonials(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/testimonials");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home testimonials");
}

export async function fetchHowItWorkSection(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/how_it_works");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home How It Works section");
}

export async function fetchHomeServices(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/services");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home services");
}

export async function fetchHomePromo(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/home/promo");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home promo");
}

export async function fetchInfo(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/info");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch info");
}

export async function fetchPosts(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/blogs");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch blogs");
}

export async function fetchPartners(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/partners");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch partners");
}

export async function fetchFaq(locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.get("/pages/FAQ");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch FAQ section");
}

export async function submitContactForm(formData, locale = "ar") {
  const axiosInstance = getAxiosInstance(locale);
  const res = await axiosInstance.post("/contact-us", formData);
  if (res.data?.status) {
    return res.data;
  }
  throw new Error(res.data?.message || "Failed to submit contact form");
}