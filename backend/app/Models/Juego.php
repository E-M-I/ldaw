<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juego extends Model
{
    protected $table = 'juegos';
    protected $fillable = ['nombre', 'idTitulo', 'idConsolas', 'idUsuario'];
    public $timestamps = false;
}
