<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaOfertas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ofertas', function (Blueprint $table) {
            $table->id();
            $table->set('estado', ['aceptado', 'pendiente', 'rechazado']);

            $table->unsignedBigInteger('idUsuarioPublicado');
            $table->foreign('idUsuarioPublicado')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('idUsuarioOfertado');
            $table->foreign('idUsuarioOfertado')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('idJuegoPublicado');
            $table->foreign('idJuegoPublicado')->references('id')->on('juegos')->onDelete('cascade');
            $table->unsignedBigInteger('idJuegoOfertado');
            $table->foreign('idJuegoOfertado')->references('id')->on('juegos')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ofertas');
    }
}
