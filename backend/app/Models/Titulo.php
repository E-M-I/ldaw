<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Titulo extends Model
{
    protected $table = 'titulos';
    protected $fillable = ['nombre', 'idGenero', 'idCompania'];
    public $timestamps = false;
}
