<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function __invoke()
    {
        $roles = Role::where('name', '!=', 'admin')->select('id', 'name')->get();
        return response()->json($roles);
    }
}
