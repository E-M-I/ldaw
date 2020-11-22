<?php

namespace App\Http\Controllers;
use App\Models\Oferta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OfertaController extends Controller
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
     * Display a listing of the recieved offers.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexRecibidas()
    {
        //
    }

    /**
     * Display a listing of the created offers.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexRealizadas()
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
        //Instanciamos la clase oferta
        $oferta = new Oferta;
        //Declaramos los datos con los enviado en el request
        $oferta->idUsuarioOfertado = $request->idUO;
        $oferta->idUsuarioPublicado = $request->idUP;
        $oferta->idJuegoPublicado = $request->idTP;
        $oferta->idJuegoOfertado = $request->idTO;
        $oferta->estado = "Pendiente";
        //Guardamos el cambio en nuestro modelo
        if ($oferta->save()){
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

    public function getInfoJuegos($id){
        $datos = DB::table('juegos')
        ->where('juegos.idUsuario', $id)
        ->select('juegos.id', 'juegos.nombre')
        ->orderBy('nombre', 'asc')
        ->get();
        return $datos;
    }
}
