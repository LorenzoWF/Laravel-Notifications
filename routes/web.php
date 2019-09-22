<?php

Route::get('notifications', 'NotificationController@notifications')->name('notifications');
    
Route::put('notification-read', 'NotificationController@markAsRead')->name('markAsRead');
Route::put('notification-all-read', 'NotificationController@markAllAsRead')->name('markAllAsRead');

Route::post('/comment', 'Posts\CommentController@store')->name('comment.store');
Route::resource('/posts', 'Posts\PostController');

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
