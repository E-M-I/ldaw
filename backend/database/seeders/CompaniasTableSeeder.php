<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompaniasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('companias')->insert([
            ['nombre'=>'Activision'],
            ['nombre'=>'Electronic Arts'],
            ['nombre'=>'Nintendo'],
            ['nombre'=>'Microsoft'],
            ['nombre'=>'Sony'],
            ['nombre'=>'Bethesda'],
            ['nombre'=>'Blizzard'],
            ['nombre'=>'Riot Games'],
            ['nombre'=>'SEGA'],
            ['nombre'=>'Square Enix'],
            ['nombre'=>'Lego'],
            ['nombre'=>'Warner Bros'],
            ['nombre'=>'Rockstar'],
            ['nombre'=>'Capcom'],
            ['nombre'=>'Red Barrels'],
            ['nombre'=>'Konami'],
            ['nombre'=>"Bandai Namco"],
            ['nombre'=>"InnerSloth"],
            ['nombre'=>'Naughty Dog']
        ]);
    }
}
