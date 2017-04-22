<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\HelloPusherEvent;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function pusher()
    {
        event(new HelloPusherEvent('Hi there Pusher!'));
        return "Event has been sent!";
    }

    public function getInfoUser($id)
    {
        $user = User::find($id);

        return response()->json($user);
    }
}
