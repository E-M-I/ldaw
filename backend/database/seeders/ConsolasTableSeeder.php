<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class ConsolasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consolas')->insert([
            ['nombre'=>'Atari'],
            ['nombre'=>'Xbox'],
            ['nombre'=>'Xbox 360'],
            ['nombre'=>'Xbox One'],
            ['nombre'=>'PlayStation'],
            ['nombre'=>'PlayStation 2'],
            ['nombre'=>'PlayStation 3'],
            ['nombre'=>'PlayStation 4'],
            ['nombre'=>'PlayStationPortable'],
            ['nombre'=>'PlayStation Vita'],
            ['nombre'=>'NES'],
            ['nombre'=>'SNES'],
            ['nombre'=>'Nintendo GameBoy'],
            ['nombre'=>'Nintendo GameBoy Advance'],
            ['nombre'=>'Nintendo 64'],
            ['nombre'=>'Nintendo GameCube'],
            ['nombre'=>'Nintendo DS'],
            ['nombre'=>'Nintendo DSi'],
            ['nombre'=>'Nintendo 3DS'],
            ['nombre'=>'Nintendo Wii'],
            ['nombre'=>'Nintendo WiiU'],
            ['nombre'=>'Nintendo Switch']
        ]);
    }
}
