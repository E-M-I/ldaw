<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioTitulo extends Model
{
    protected $table = 'usuarios_titulos';
    protected $fillable = ['idUsuario', 'idTitulo'];

}
