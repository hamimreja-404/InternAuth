<?php

namespace App\Controllers;

use App\Models\AuthUserModel;
use App\Models\TeacherModel;
use CodeIgniter\RESTful\ResourceController;
use Firebase\JWT\JWT;

class AuthController extends ResourceController
{
    // Register API: Pushes data to both tables 
    public function register()
    {
        $db = \Config\Database::connect();
        $userModel = new AuthUserModel();
        $teacherModel = new TeacherModel();

        $rules = [
            'email'           => 'required|valid_email|is_unique[auth_user.email]',
            'password'        => 'required|min_length[6]',
            'first_name'      => 'required',
            'last_name'       => 'required',
            'university_name' => 'required'
        ];

        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        }

        // Start Database Transaction to ensure both insert or neither do
        $db->transStart();

        // 1. Insert into auth_user [cite: 6, 7]
        $userData = [
            'email'      => $this->request->getVar('email'),
            'password'   => $this->request->getVar('password'),
            'first_name' => $this->request->getVar('first_name'),
            'last_name'  => $this->request->getVar('last_name'),
            'phone'      => $this->request->getVar('phone'),
        ];
        $userModel->insert($userData);
        $userId = $userModel->getInsertID();

        // 2. Insert into teachers with the foreign key [cite: 7, 14]
        $teacherData = [
            'user_id'         => $userId,
            'university_name' => $this->request->getVar('university_name'),
            'department'      => $this->request->getVar('department'),
            'gender'          => $this->request->getVar('gender'),
            'year_joined'     => $this->request->getVar('year_joined')
        ];
        $teacherModel->insert($teacherData);

        $db->transComplete();

        if ($db->transStatus() === false) {
            return $this->failServerError('Failed to create user and teacher records.');
        }

        return $this->respondCreated(['message' => 'User registered successfully in both tables']);
    }

    // Login API: Authenticates and returns JWT [cite: 3, 4]
    public function login()
    {
        $userModel = new AuthUserModel();
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        $user = $userModel->where('email', $email)->first();

        if (!$user || !password_verify($password, $user['password'])) {
            return $this->failUnauthorized('Invalid email or password');
        }

        // Generate JWT 
        $key = env('JWT_SECRET', 'my_super_secure_intern_task_secret_key_123');
        $payload = [
            'iat'  => time(), // Issued at
            'exp'  => time() + 3600, // Expires in 1 hour
            'uid'  => $user['id'],
            'email'=> $user['email']
        ];

        $token = JWT::encode($payload, $key, 'HS256');

        return $this->respond(['message' => 'Login successful', 'token' => $token]);
    }
}