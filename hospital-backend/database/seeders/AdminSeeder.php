<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::where('name', 'admin')->first();
        User::create([
            'name' => 'فادي نعمة',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin123'),
            'role_id' => $role->id,
        ]);
    }
}
