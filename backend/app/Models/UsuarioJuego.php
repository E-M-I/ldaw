<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class UsuarioJuego extends Pivot
{
    protected $fillabe = [
        'idUsuario',
        'idJuego'
    ];
}
