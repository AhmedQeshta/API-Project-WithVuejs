<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Ahmed',
            'email' => 'ahmed@test.com',
            'password' => bcrypt('ahmed@test.com'),
        ]);
        User::create([
            'name' => 'Ahmed2',
            'email' => 'ahmed2@test.com',
            'password' => bcrypt('ahmed2@test.com'),
        ]);
        User::create([
            'name' => 'Ahmed3',
            'email' => 'ahmed3@test.com',
            'password' => bcrypt('ahmed3@test.com'),
        ]);
    }
}
