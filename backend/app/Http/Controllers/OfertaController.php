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
        $est;
        $oferta = Oferta::find($id);
        if($request->estado == "Aceptar"){
            DB::beginTransaction();
            try{
                $est = "aceptado";
                $oferta->estado = $est;
                if($oferta->update()){
                    $cambios = DB::table('ofertas')
                                ->where('idJuegoPublicado', $request->jp)
                                ->orWhere('idJuegoPublicado', $request->jo)
                                ->orWhere('idJuegoOfertado', $request->jo)
                                ->orWhere('idJuegoOfertado', $request->jp)
                                ->get();
                    foreach($cambios as $cambio){
                        if($cambio->estado == "pendiente"){
                            $of = Oferta::find($cambio->id);
                            $of->estado = "rechazado";
                            $of->update();
                        }
                    }
                    DB::commit();
                    return $cambios;
                }
            }catch(QueryException $ex){
                DB::rollback();
                return 0;
            }
            
        }else{
            $est = "rechazado";
            $oferta->estado = $est;
            $oferta->update();
        }
        
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

    public function getOfertasRec($id){
        $datos = DB::table('ofertas')
        ->join('users','ofertas.idUsuarioPublicado','=','users.id')
        ->join('users as users1','ofertas.idUsuarioOfertado','=','users1.id')
        ->join('juegos','ofertas.idJuegoPublicado','=','juegos.id')
        ->join('juegos as juegos1','ofertas.idJuegoOfertado','=','juegos1.id')
        ->join('consolas','consolas.id','=','juegos1.idConsolas')
        ->where([['ofertas.idUsuarioPublicado', $id],['estado','pendiente']])
        ->select('ofertas.id', 'users1.username as UsuarioOf', 'juegos.nombre as JuegoPub', 'juegos1.nombre as JuegoOf', 'consolas.nombre as CJO', 'ofertas.idJuegoPublicado', 'ofertas.idJuegoOfertado' )
        ->get();
        return $datos;
    }

    public function getOfertasRea($id){
        $datos = DB::table('ofertas')
        ->join('users','ofertas.idUsuarioPublicado','=','users.id')
        ->join('users as users1','ofertas.idUsuarioOfertado','=','users1.id')
        ->join('juegos','ofertas.idJuegoPublicado','=','juegos.id')
        ->join('juegos as juegos1','ofertas.idJuegoOfertado','=','juegos1.id')
        ->join('consolas','consolas.id','=','juegos1.idConsolas')
        ->where('ofertas.idUsuarioOfertado', $id)
        ->select('ofertas.id','ofertas.estado', 'users.username as UsuarioPub', 'juegos.nombre as JuegoPub', 'juegos1.nombre as JuegoOf', 'consolas.nombre as CJO', 'ofertas.idJuegoPublicado', 'ofertas.idJuegoOfertado' )
        ->orderBy('ofertas.id')
        ->get();
        return $datos;
    }
}
