<?php

namespace App\Models;

use CodeIgniter\Model;

class TeacherModel extends Model
{
    protected $table            = 'teachers';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    
    // The fields allowed to be inserted/updated
    protected $allowedFields    = ['user_id', 'university_name', 'gender', 'year_joined', 'department'];
}