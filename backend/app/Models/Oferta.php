<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
    protected $table = 'ofertas';
    protected $fillable = ['estado', 'idUsuarioPublicado','idUsuarioOfertado', 'idJuegoPublicado', 'idJuegoOfertado'];
}
