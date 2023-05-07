<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{

    protected $fillable=['products_id','products_number','Product_type','Product_name','Product_img','Building','Product_status'];

    use HasFactory;
}
