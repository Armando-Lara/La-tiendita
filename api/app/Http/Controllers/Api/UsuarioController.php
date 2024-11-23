<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $Usuarios=Usuario::all();
        return $Usuarios;
    }

    
    public function store(Request $request)
    {
        $Usuarios=new Usuario();
        $Usuarios->Nombre_completo=$request->Nombre_completo;
        $Usuarios->Edad=$request->Edad;
        $Usuarios->Libro=$request->Libro;
        $Usuarios->Fecha_Nacimiento=$request->Fecha_Nacimiento;

        $Usuarios->save();
    }

    public function show(string $id)
    {
        $Usuarios=Usuario::find($id);
        return $Usuarios;
    }

    
    public function update(Request $request, string $id)
    {
        $Usuarios=Usuario::finOrFail($request->id);
        $Usuarios->Nombre_completo=$request->Nombre_completo;
        $Usuarios->Edad=$request->Edad;
        $Usuarios->Libro=$request->Libro;
        $Usuarios->Fecha_Nacimiento=$request->Fecha_Nacimiento;

        $Usuarios->save();
        return $Usuarios;
    }


    public function destroy(string $id)
    {
        $Usuarios=Usuario::destroy($id);
        return $Usuarios;
    }
}
