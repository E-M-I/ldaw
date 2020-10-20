<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenerosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('generos')->insert([
            ['nombre'=>'First Person Shooter'],
            ['nombre'=>'Third Person Shooter'],
            ['nombre'=>'MOBA'],
            ['nombre'=>'MMORPG'],
            ['nombre'=>'Terror'],
            ['nombre'=>'Survival Horror'],
            ['nombre'=>'Sports'],
            ['nombre'=>'Table Games'],
            ['nombre'=>'Fighting'],
            ['nombre'=>'Arcade'],
            ['nombre'=>'Action'],
            ['nombre'=>'Bullet Hell'],
            ['nombre'=>'Adventure'],
            ['nombre'=>'Strategy'],
            ['nombre'=>'Racing'],
            ['nombre'=>'Open World'],
            ['nombre'=>"Beat 'Em Up"],
            ['nombre'=>'Platform']
        ]);
    }
}
