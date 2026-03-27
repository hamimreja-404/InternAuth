<?php

namespace App\Controllers;

use App\Models\AuthUserModel;
use App\Models\TeacherModel;
use CodeIgniter\RESTful\ResourceController;

class DataController extends ResourceController
{
public function getUsers()
    {
        $userModel = new AuthUserModel();
        // Added 'phone' to the select statement
        $users = $userModel->select('id, email, first_name, last_name, phone')->findAll();
        return $this->respond($users);
    }

public function getTeachers()
{
    $db = \Config\Database::connect();
    $builder = $db->table('teachers');
    
    // Explicitly select columns to avoid "Ambiguous column" errors
    $builder->select('
        teachers.id as teacher_id, 
        teachers.university_name, 
        teachers.department, 
        teachers.gender, 
        teachers.year_joined, 
        auth_user.first_name, 
        auth_user.last_name, 
        auth_user.email,
        auth_user.phone
    ');
    
    $builder->join('auth_user', 'auth_user.id = teachers.user_id');
    $query = $builder->get();
    
    return $this->respond($query->getResult());
}
}