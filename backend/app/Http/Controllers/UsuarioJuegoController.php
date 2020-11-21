<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Juego;
use App\Http\Models\UsuarioJuego;
use App\Http\Resources\UsuarioJuegoCollection;
use App\Http\Resources\UsuarioJuego as UsuarioJuegoResource;
use Illuminate\Support\Facades\DB;

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
        $request->validate([
            'nombre' => 'required',
            'idTitulo' => 'required',
            'idConsolas' => 'required',
            'idUsuario' => 'required'
        ]);
        
        $juego = Juego::create($request->all());
        return (new UsuarioJuegoResource($usuarioJuego))
            ->response()
            ->setStatusCode(201);

        /*
        1. MANDAS LLAMAR FUNCION DE CONTROLADOR JuegoController -> registra datos del juego
        2. HACER NUEVO QUERY PARA METER LOS DATOS DEL JUEGO + SUS IDS
        */
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
