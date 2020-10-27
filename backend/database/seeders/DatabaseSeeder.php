<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            CompaniasTableSeeder::class,
            ConsolasTableSeeder::class,
            GenerosTableSeeder::class,
            PrivilegiosTableSeeder::class,
            RolesTableSeeder::class,
            RolesPrivilegiosTableSeeder::class
        ]);
    }
}
