<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AuthUser extends Migration
{
public function up()
    {
        $this->forge->addField([
            'id'          => ['type' => 'INT', 'constraint' => 11, 'unsigned' => true, 'auto_increment' => true], // [cite: 9]
            'email'       => ['type' => 'VARCHAR', 'constraint' => '255', 'unique' => true], // [cite: 10]
            'first_name'  => ['type' => 'VARCHAR', 'constraint' => '100'], // [cite: 11]
            'last_name'   => ['type' => 'VARCHAR', 'constraint' => '100'], // [cite: 11]
            'password'    => ['type' => 'VARCHAR', 'constraint' => '255'], // [cite: 12]
            'created_at'  => ['type' => 'DATETIME', 'null' => true], // extra mandatory field [cite: 13]
            'updated_at'  => ['type' => 'DATETIME', 'null' => true], // extra mandatory field [cite: 13]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('auth_user');
    }

    public function down()
    {
        $this->forge->dropTable('auth_user');
    }
}
