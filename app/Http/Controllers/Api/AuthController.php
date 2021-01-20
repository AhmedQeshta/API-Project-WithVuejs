<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
        if ($validator->failed()) {
            return response()->json(['error' => true, 'message' => $validator->errors()], 200);
        }
        $credentials = request(['email', 'password']);
        $token = auth('api')->attempt($credentials);
        if (!$token) {
            return response()->json(['error' => true, 'message' => 'Sorry!, Unauthorized'], 200);
        }
        return response()->json([
            'message' => 'Successfully, Login',
            'access_token' => $token,
            'expire_in' => auth('api')->factory()->getTTL() * 3600,
        ], 200);
    }

    public function logout()
    {
        auth('api')->logout();
        return response()->json(['error' => false, 'message' => 'Logout Successfully'], 200);
    }
}
