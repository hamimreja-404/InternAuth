// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://internauth-api.great-site.net/index.php/api', // Your CodeIgniter backend URL
// });

// // Automatically attach the JWT token
// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default api;

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = 'https://dlyctnzlzaqnjzvjihki.supabase.co';
const supabaseKey = 'sb_publishable_UH-d76lfGA_XI32zOxKyKA_AlQUB8B5';
export const supabase = createClient(supabaseUrl, supabaseKey);

// 1. Register API
export const registerUser = async (formData) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        first_name: formData.first_name,
        last_name: formData.last_name,
        mobile: formData.mobile,
        university: formData.university,
        department: formData.department,
        gender: formData.gender,
        year_of_join: formData.year_of_join
      }
    }
  });
  if (error) throw error;
  return data;
};

// 2. Login API
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

// 3. Get Users API
export const getUsers = async () => {
  const { data, error } = await supabase.from('auth_user').select('*');
  if (error) throw error;
  return data;
};

// 4. Get Teachers API
export const getTeachers = async () => {
  const { data, error } = await supabase.from('teachers').select('*, auth_user (first_name, last_name, email,mobile)');
  if (error) throw error;
  return data;
};