import axios from "axios";

const API_BASE_URL = "https://rewash-store.bright-ignite.com/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Cache-Control": "application/json",
  },
});

export async function fetchWashingPlans() {
  const res = await axiosInstance.get("/washing_plans");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch washing plans");
}

export async function fetchHomeHero() {
  const res = await axiosInstance.get("/home/hero");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home hero");
}

export async function fetchHomeFeatures() {
  const res = await axiosInstance.get("/home/features");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home features");
}

export async function fetchHomeAbout() {
  const res = await axiosInstance.get("/home/about");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home about");
}

export async function fetchHomeTestimonials() {
  const res = await axiosInstance.get("/home/testimonials");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home testimonials");
}

// export async function fetchHomeFeaturesSection() {
//   const res = await axiosInstance.get("/home/features_section");
//   if (res.data?.status && res.data.data) {
//     return res.data.data;
//   }
//   throw new Error("Failed to fetch home features section");
// }

export async function fetchHomeServices() {
  const res = await axiosInstance.get("/home/services");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home services");
}

export async function fetchHomePromo() {
  const res = await axiosInstance.get("/home/promo");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch home promo");
}

export async function fetchInfo() {
  const res = await axiosInstance.get("/info");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch info");
}


export async function fetchPartners() {
  const res = await axiosInstance.get("/partners");
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch partners");
}

export async function fetchPosts() {
  const res = await axiosInstance.get('/blogs');
  if (res.data?.status && res.data.data) {
    return res.data.data;
  }
  throw new Error("Failed to fetch blogs");
}