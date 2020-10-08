<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaTitulos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titulos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('urlFoto');
            $table->unsignedBigInteger('idUsuario');
            $table->foreign('idUsuario')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('idGenero');
            $table->foreign('idGenero')->references('id')->on('generos')->onDelete('cascade');
            $table->unsignedBigInteger('idCompania');
            $table->foreign('idCompania')->references('id')->on('companias')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('titulos');
    }
}
