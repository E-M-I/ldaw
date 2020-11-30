<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\OfertaController;
use App\Http\Controllers\TituloController;
use App\Http\Controllers\ConsolaController;
use App\Http\Controllers\UsuarioTituloController;
use App\Http\Controllers\UsuarioJuegoController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    'ofertas' => OfertaController::class,
    'titulos' => TituloController::class,
    'intereses' => UsuarioTituloController::class,
    'juegos' => UsuarioJuegoController::class,
    'consolas' => ConsolaController::class,
    'users' => UserController::class
]);

Route::get('coincidencias', 'App\Http\Controllers\UsuarioJuegoController@indexCoincidencias')->name('coincidencias');
Route::get('ofertas/realizadas/{realizadas}', 'App\Http\Controllers\OfertaController@indexRealizadas')->name('realizadas');
Route::get('ofertas/recibidas/{recibidas}', 'App\Http\Controllers\OfertaController@indexRecibidas')->name('recibidas');
Route::get('intereses/personal/{id}', 'App\Http\Controllers\UsuarioTituloController@getIntereses')->name('intereses');
Route::get('intereses/misIntereses/{id}','App\Http\Controllers\UsuarioTituloController@getInteresesInterfaz')->name('interesesView');
Route::get('juegos/oferta/{id}','App\Http\Controllers\OfertaController@getInfoJuegos')->name('juegosOferta');
Route::get('juegos/oferta/ofertasRec/{id}','App\Http\Controllers\OfertaController@getOfertasRec')->name('ofertasRec');
Route::get('juegos/oferta/ofertasRea/{id}','App\Http\Controllers\OfertaController@getOfertasRea')->name('ofertasRea');
