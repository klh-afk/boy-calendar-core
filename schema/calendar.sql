create table bookings (
  id uuid primary key,
  shop_id text,
  date date,
  start_time time,
  end_time time,
  status text,
  created_at timestamp
);
