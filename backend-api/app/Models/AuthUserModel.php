<?php

namespace App\Models;

use CodeIgniter\Model;

class AuthUserModel extends Model
{
    protected $table            = 'auth_user';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    
    // The fields allowed to be inserted/updated based on your schema
    protected $allowedFields    = ['email', 'first_name', 'last_name', 'password', 'phone'];

    // Automatically hash passwords before inserting
    protected $beforeInsert = ['hashPassword'];

    protected function hashPassword(array $data)
    {
        if (isset($data['data']['password'])) {
            $data['data']['password'] = password_hash($data['data']['password'], PASSWORD_DEFAULT);
        }
        return $data;
    }
}