<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Teachers extends Migration
{
public function up()
    {
        $this->forge->addField([
            'id'              => ['type' => 'INT', 'constraint' => 11, 'unsigned' => true, 'auto_increment' => true], // [cite: 14]
            'user_id'         => ['type' => 'INT', 'constraint' => 11, 'unsigned' => true, 'unique' => true], // UNIQUE enforces 1-1 [cite: 6, 7, 14]
            'university_name' => ['type' => 'VARCHAR', 'constraint' => '255'], // [cite: 14]
            'gender'          => ['type' => 'VARCHAR', 'constraint' => '50', 'null' => true], // [cite: 14]
            'year_joined'     => ['type' => 'INT', 'constraint' => 4, 'null' => true], // [cite: 14]
        ]);
        
        $this->forge->addKey('id', true);
        // Setting up the Foreign Key relationship [cite: 7]
        $this->forge->addForeignKey('user_id', 'auth_user', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('teachers'); // [cite: 14]
    }

    public function down()
    {
        $this->forge->dropTable('teachers');
    }
}
