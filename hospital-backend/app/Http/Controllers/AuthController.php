<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //register function
    // public function register(StoreUserRequest $request)
    // {
    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //         'role_id' => $request->role
    //     ]);

    //     $token = $user->createToken('authToken')->plainTextToken;

    //     return response()->json([
    //         'access_token' => $token,
    //         'user' => $user
    //     ]);
    // }

    //login function
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|min:8|max:255'
        ]);

        try {
            $user = User::where('email', $request->email)->firstOrFail();
        } catch (ModelNotFoundException $er) {
            return response()->json([
                'email_error' => 'email not found'
            ], 401);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'password_error' => 'Invalid password'
            ], 401);
        }

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'role' => $user->role->name,
            ]
        ]);
    }
}
