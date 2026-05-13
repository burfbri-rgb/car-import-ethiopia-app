export interface Car {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel_type: string | null;
  transmission: string | null;
  engine_cc: string | null;
  color: string | null;
  condition: string | null;
  description: string | null;
  features: string[] | null;
  images: string[] | null;
  status: string;
  is_featured: boolean;
}

export interface Inquiry {
  id: string;
  created_at: string;
  car_id: string | null;
  car_name: string | null;
  name: string;
  phone: string;
  email: string;
  message: string | null;
  is_read: boolean;
}

export interface Quote {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  preferred_car: string | null;
  budget_range: string | null;
  message: string | null;
  is_read: boolean;
}

export interface BlogPost {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  image: string | null;
  author: string | null;
  published: boolean;
  tags: string[] | null;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
