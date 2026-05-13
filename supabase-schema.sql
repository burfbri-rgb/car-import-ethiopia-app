-- Cars table
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type TEXT,
  transmission TEXT,
  engine_cc TEXT,
  color TEXT,
  condition TEXT DEFAULT 'used',
  description TEXT,
  features TEXT[],
  images TEXT[],
  status TEXT DEFAULT 'available',
  is_featured BOOLEAN DEFAULT FALSE
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  car_id UUID REFERENCES cars(id) ON DELETE SET NULL,
  car_name TEXT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE
);

-- Quotes table
CREATE TABLE IF NOT EXISTS quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_car TEXT,
  budget_range TEXT,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  author TEXT,
  published BOOLEAN DEFAULT FALSE,
  tags TEXT[]
);

-- Enable Row Level Security
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS policies: allow public read for available cars
CREATE POLICY "Anyone can read available cars" ON cars
  FOR SELECT USING (status = 'available');

-- RLS policies: allow public insert for inquiries
CREATE POLICY "Anyone can create inquiries" ON inquiries
  FOR INSERT WITH CHECK (true);

-- RLS policies: allow public insert for quotes
CREATE POLICY "Anyone can create quotes" ON quotes
  FOR INSERT WITH CHECK (true);

-- RLS policies: allow public read for published blog posts
CREATE POLICY "Anyone can read published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Seed data: sample cars
INSERT INTO cars (name, slug, make, model, year, price, mileage, fuel_type, transmission, engine_cc, color, condition, description, features, images, is_featured, status) VALUES
('Toyota Land Cruiser Prado 2022', 'toyota-land-cruiser-prado-2022', 'Toyota', 'Land Cruiser Prado', 2022, 95000.00, 25000, 'Diesel', 'Automatic', '2800cc', 'White', 'Used', 'The Toyota Land Cruiser Prado is a full-size SUV known for its durability, off-road capability, and luxurious interior. Perfect for Ethiopian roads and family use.', ARRAY['Leather Seats', 'Sunroof', '4WD', 'Reverse Camera', 'Bluetooth', 'AC'], ARRAY['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', 'https://images.unsplash.com/photo-1552519507-88c6e9b3e0a4?w=800'], TRUE, 'available'),

('BMW X5 2023', 'bmw-x5-2023', 'BMW', 'X5', 2023, 85000.00, 15000, 'Petrol', 'Automatic', '3000cc', 'Black', 'Used', 'The BMW X5 combines luxury and performance. Features cutting-edge technology, a powerful engine, and premium comfort.', ARRAY['Panoramic Roof', 'Leather Seats', 'Digital Dashboard', '360 Camera', 'Apple CarPlay', 'Heated Seats'], ARRAY['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800'], TRUE, 'available'),

('Mercedes-Benz GLE 350 2023', 'mercedes-benz-gle-350-2023', 'Mercedes-Benz', 'GLE 350', 2023, 88000.00, 12000, 'Petrol', 'Automatic', '3000cc', 'Silver', 'Used', 'The Mercedes-Benz GLE offers unmatched luxury and advanced driver assistance systems. A premium SUV for discerning customers.', ARRAY['Panoramic Roof', 'MBUX System', 'Leather Seats', 'Adaptive Cruise Control', 'Wireless Charging'], ARRAY['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', 'https://images.unsplash.com/photo-1544636331-3f1c4d4e8e8b?w=800'], TRUE, 'available'),

('Toyota Hiace 2021', 'toyota-hiace-2021', 'Toyota', 'Hiace', 2021, 35000.00, 40000, 'Diesel', 'Manual', '2500cc', 'White', 'Used', 'The Toyota Hiace is a popular commercial van in Ethiopia. Reliable, spacious, and fuel-efficient. Ideal for transport businesses.', ARRAY['AC', 'Power Steering', 'Radio', 'Central Locking'], ARRAY['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800', 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'], FALSE, 'available'),

('Nissan Patrol 2022', 'nissan-patrol-2022', 'Nissan', 'Patrol', 2022, 75000.00, 20000, 'Petrol', 'Automatic', '4000cc', 'Grey', 'Used', 'The Nissan Patrol is a legendary off-road SUV. Known for its ruggedness and powerful performance on any terrain.', ARRAY['Leather Seats', '4WD', 'DVD Entertainment', 'Push Start', 'AC'], ARRAY['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'], FALSE, 'available'),

('Mitsubishi Pajero 2022', 'mitsubishi-pajero-2022', 'Mitsubishi', 'Pajero', 2022, 55000.00, 30000, 'Diesel', 'Automatic', '3200cc', 'White', 'Used', 'The Mitsubishi Pajero is a reliable and capable SUV. Popular among Ethiopian drivers for its durability and off-road performance.', ARRAY['4WD', 'Leather Seats', 'Sunroof', 'AC', 'Cruise Control'], ARRAY['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'], FALSE, 'available'),

('Toyota Corolla 2023', 'toyota-corolla-2023', 'Toyota', 'Corolla', 2023, 28000.00, 10000, 'Petrol', 'Automatic', '1800cc', 'Blue', 'New', 'The Toyota Corolla is a fuel-efficient sedan perfect for city driving. Low mileage and excellent condition.', ARRAY['AC', 'Bluetooth', 'Reverse Camera', 'Touch Screen', 'ABS'], ARRAY['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'], FALSE, 'available'),

('Lexus LX 600 2023', 'lexus-lx-600-2023', 'Lexus', 'LX 600', 2023, 120000.00, 8000, 'Petrol', 'Automatic', '3500cc', 'Black', 'Used', 'The Lexus LX 600 is the ultimate luxury SUV. Combines off-road capability with premium comfort and cutting-edge technology.', ARRAY['Semi-Aniline Leather', 'Mark Levinson Audio', 'Heated/Cooled Seats', 'Head-Up Display', 'Air Suspension', '360 Camera'], ARRAY['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'], TRUE, 'available'),

('Hyundai Tucson 2023', 'hyundai-tucson-2023', 'Hyundai', 'Tucson', 2023, 32000.00, 15000, 'Petrol', 'Automatic', '2000cc', 'Red', 'Used', 'The Hyundai Tucson is a stylish compact SUV with modern features and excellent fuel economy. Perfect for urban and suburban driving.', ARRAY['Panoramic Roof', 'Digital Cluster', 'Apple CarPlay', 'Blind Spot Detection', 'Wireless Charging'], ARRAY['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'], FALSE, 'available'),

('Isuzu D-Max 2022', 'isuzu-d-max-2022', 'Isuzu', 'D-Max', 2022, 38000.00, 35000, 'Diesel', 'Manual', '2500cc', 'Silver', 'Used', 'The Isuzu D-Max is a tough and reliable pickup truck. Perfect for commercial use and off-road work.', ARRAY['AC', 'Power Steering', 'Radio', 'Cargo Liner', '4WD'], ARRAY['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'], FALSE, 'available');

-- Seed data: sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author, published, tags) VALUES
('How to Import a Car to Ethiopia: Complete Guide 2024', 'how-to-import-car-ethiopia-guide', 'Everything you need to know about importing cars to Ethiopia. From documentation to customs clearance, we cover it all.', E'# How to Import a Car to Ethiopia\n\nImporting a car to Ethiopia can seem daunting, but with the right guidance, it is a straightforward process.\n\n## Step 1: Choose Your Vehicle\n\nSelect a vehicle that suits your needs and budget. Popular choices include SUVs for their versatility and sedans for fuel efficiency.\n\n## Step 2: Documentation\n\nEnsure you have all required documents:\n- Passport copy\n- Bill of lading\n- Commercial invoice\n- Certificate of origin\n\n## Step 3: Shipping\n\nCars are typically shipped from Dubai, Japan, or the USA. Shipping takes 2-4 weeks.\n\n## Step 4: Customs Clearance\n\nWork with a licensed customs clearing agent to clear your vehicle through Ethiopian customs.\n\n## Step 5: Registration\n\nRegister your vehicle with the Ethiopian Transport Authority.', 'Admin', TRUE, ARRAY['import-guide', 'ethiopia', 'car-import']),

('Top 10 SUVs for Ethiopian Roads in 2024', 'top-suvs-ethiopian-roads-2024', 'Discover the best SUVs for Ethiopian terrain. Our experts rank the top 10 vehicles for performance and reliability.', E'# Top 10 SUVs for Ethiopian Roads\n\nEthiopian roads vary from paved highways to rugged off-road terrain. Here are our top picks:\n\n## 1. Toyota Land Cruiser Prado\nUnmatched reliability and off-road capability.\n\n## 2. Nissan Patrol\nPowerful engine and legendary durability.\n\n## 3. Mitsubishi Pajero\nExcellent value and proven performance.\n\n## 4. BMW X5\nLuxury meets performance.\n\n## 5. Mercedes-Benz GLE\nPremium comfort with advanced technology.', 'Admin', TRUE, ARRAY['suvs', 'ethiopia', 'car-guide']);
