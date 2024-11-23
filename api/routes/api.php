<?php

use App\Http\Controllers\Api\UsuarioController;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::controller(UsuarioController::class)->group(function(){
    Route::get('./Usuarios','index');
    Route::post('./Usuarios','store');
    Route::get('./Usuarios/{id}','show');
    Route::put('./Usuarios/{id]','update');
    Route::delete('./Usuarios/{id]','destroy');

});

