<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Psy\TabCompletion\AutoCompleter;

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');