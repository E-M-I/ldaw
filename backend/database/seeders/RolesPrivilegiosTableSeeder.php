<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesPrivilegiosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles_privilegios')->insert([
            'idRol' => '2', // Admin
            'idPrivilegio' => '1' // Registrar título
        ]);
    }
}
