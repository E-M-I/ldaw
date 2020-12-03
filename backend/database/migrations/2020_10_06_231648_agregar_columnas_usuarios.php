<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarColumnasUsuarios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('idRol');
            $table->foreign('idRol')->references('id')->on('roles')->onDelete('cascade');
            $table->string('username')->after('name');
            $table->string('telefono')->after('remember_token');
            $table->string('fechaNacimiento')->after('telefono');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('idRol');
            $table->dropColumn('idRol');
            $table->dropColumn('username');
            $table->dropColumn('telefono');
            $table->dropColumn('fechaNacimiento');
        });
    }
}
