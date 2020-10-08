<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaRolesPrivilegios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles_privilegios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idRol');
            $table->foreign('idRol')->references('id')->on('roles')->onDelete('cascade');
            $table->unsignedBigInteger('idPrivilegio');
            $table->foreign('idPrivilegio')->references('id')->on('privilegios')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles_privilegios');
    }
}
