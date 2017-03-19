<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Abc extends Controller
{
    public function addInfo($input)
    {
        try {
            $userId = $this->getUserId($input['email']);
            $now = Carbon::now();

            $pollId = Poll::insertGetId([
                'user_id' => ($userId) ? $userId : null,
                'title' => $input['title'],
                'description' => ($input['description']) ? $input['description'] : null,
                'location' => ($input['location']) ? $input['location'] : null,
                'multiple' => $input['type'],
                'created_at' => $now,
                'date_close' => ($input['closingTime']) ? $input['closingTime'] : null,
                'name' => ($userId) ? null : $input['name'],
                'email' => ($userId) ? null : $input['email'],
            ]);

            return $pollId;
        } catch (Exception $ex) {
            return false;
        }
    }

    public function abc()
    {

    }
}
