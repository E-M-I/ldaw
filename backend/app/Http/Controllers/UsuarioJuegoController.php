<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Juego;
use App\Models\UsuarioJuego;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class UsuarioJuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Display a listing of coincidences.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexCoincidencias()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Instanciar la clase Juego
        $juego = new Juego;

        //Obtener los datos del juego enviados desde el request
        $juego->nombre = $request->nombre;
        $juego->idTitulo = $request->idTitulo;
        $juego->idConsolas = $request->idConsolas;
        $juego->idUsuario = $request->idUsuario;

        //guardar el juego en la base de datos
        $juego->save();
        

        //obtener el id del juego recien creado
        $idJuego = DB::table('juegos')
            ->where('nombre', '=', $juego->nombre)->pluck('id');

        $idJuego = $idJuego[0];

        $usuarioJuego = new UsuarioJuego;

        $usuarioJuego->idUsuario = $request->idUsuario;
        $usuarioJuego->idJuego = $idJuego;
        
        if ($usuarioJuego->save()){
            return 1;
        }
        else{
            return -1;
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
