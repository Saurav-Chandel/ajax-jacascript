from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    
    path('demo/',AjaxHandlerView.as_view()),
    path('',index,name="index"),
    path('save_book/',AddBook,name="add_book"),
    path('getAllBooks/',GetAllBooks,name="get_all_books")
]
