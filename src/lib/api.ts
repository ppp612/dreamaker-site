const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw { status: res.status, data: body };
  }
  return res.json();
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SiteSettings {
  company_name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  about_text: string;
  abn: string;
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone?: string;
  role: string;
  location?: string;
  message: string;
}

// ─── API calls ──────────────────────────────────────────────────────────────

export function getSiteSettings() {
  return fetcher<SiteSettings>("/api/settings/");
}

export function submitEnquiry(data: EnquiryPayload) {
  return fetcher<EnquiryPayload>("/api/enquiries/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
