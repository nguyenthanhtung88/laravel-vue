<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Project;

class ProjectController extends Controller
{
    public function create()
    {
        return view('project.create', [
            'projects' => Project::all()
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
        ]);

        // Project::forceCreate([
        //     'name' => request('name'),
        //     'description' => request('description'),
        // ]);

        return ['message' => 'Project created!'];
    }
}
