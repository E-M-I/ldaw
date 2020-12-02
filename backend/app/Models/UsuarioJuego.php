<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class UsuarioJuego extends Pivot
{
    protected $table = 'usuarios_juegos';
    protected $fillabe = [
        'idUsuario',
        'idJuego'
    ];
}
