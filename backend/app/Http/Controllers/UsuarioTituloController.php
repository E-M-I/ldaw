<?php

namespace App\Http\Controllers;
use App\Models\UsuarioTitulo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsuarioTituloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    public function getIntereses($id){
        $datos = DB::table('usuarios_titulos')
                    ->join('titulos', 'usuarios_titulos.idTitulo', '=', 'titulos.id')
                    ->join('companias', 'titulos.idCompania', '=', 'companias.id')
                    ->join('generos', 'titulos.idGenero', '=', 'generos.id')
                    ->select('titulos.nombre as NT', 'generos.nombre as NG', 'companias.nombre as NC')
                    ->where('usuarios_titulos.idUsuario',$id)
                    ->get();
        $respuesta = '<thead> <tr> <th>Titulo</th><th >Genero</th><th >Compañia</th> </tr></thead><tbody>';
        foreach ($datos as $res){
            $respuesta .= '<tr> <td align="center">'. $res->NT. '</td>';
            $respuesta .= '<td align="center">'.$res->NG.'</td>';
            $respuesta .= '<td align="center">'.$res->NC.'</td> </tr> ';
             }
        $respuesta .= '</tbody>';
        return $respuesta;
    }


    public function getInteresesInterfaz($id){
        $datos = DB::table('usuarios_titulos')
        ->join('juegos', 'usuarios_titulos.idTitulo', '=', 'juegos.idTitulo')
        ->join('consolas','consolas.id','=','juegos.idConsolas')
        ->join('users','juegos.idUsuario','=','users.id')
        ->where([['usuarios_titulos.idUsuario',$id],['juegos.idUsuario', '!=', $id]])
        ->select('juegos.id', 'juegos.nombre as nombreJ','consolas.nombre as nombreC','juegos.idUsuario as owner','username')
        ->orderBy('nombreJ', 'asc')
        ->get();
        return $datos;
    }

    public function getCompanias() {
        return DB::table('companias')
            ->get();
    }

    public function getGeneros() {
        return DB::table('generos')
            ->get();
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
          //Instanciamos la clase Usuario titulo
          $interes = new UsuarioTitulo;
          //Declaramos los datos con los enviado en el request
          $interes->idTitulo = $request->idTitulo;
          $interes->idUsuario = $request->idUsuario;
          //Guardamos el cambio en nuestro modelo
          if ($interes->save()){
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
