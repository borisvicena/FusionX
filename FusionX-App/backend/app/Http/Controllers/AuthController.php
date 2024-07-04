<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Successfully logged out'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $request->user()->createToken('authToken');
            return response()->json(['token' => $token->plainTextToken], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'],  401);
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        try {
            $user = User::create([
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken('authToken')->plainTextToken;
    
            return response()->json(['message' => 'User created successfully', 'user' => $user, 'token' => $token], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create user', 'error' => $e->getMessage()], 500);
        }
    }    
}