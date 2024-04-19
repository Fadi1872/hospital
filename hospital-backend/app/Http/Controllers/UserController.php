<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use \App\Models\Role;
use \App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adminID = Role::where('name', 'admin')->value('id');
        $users = User::join('roles', 'users.role_id', '=', 'roles.id')
            ->where('role_id', '!=', $adminID)
            ->select(['users.id', 'users.name', 'users.email', 'roles.name as role', 'roles.id as role_id'])
            ->get();

        return response()->json(
            $users
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'user has been added successfuly'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::where('id', $id)->get();

        return response()->json([
            $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, string $id)
    {
        User::findOrFail($id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'role_id' => $request->role,
        ]);

        return response()->json([
            'message' => 'user has been updated successfuly'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function updatePassword(Request $request, string $id)
    {
        $request->validate([
            'password' => 'required|confirmed|min:8|max:255'
        ]);
        User::findOrFail($id)->update([
            'password' => Hash::make($request->password)
        ]);

        return response()->json([
            'message' => 'password has been updated successfuly'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        User::findOrFail($id)->delete();

        return response()->json([
            'message' => 'user has been deleted successfuly'
        ]);
    }
}
