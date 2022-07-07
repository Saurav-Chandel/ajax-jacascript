from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    
    path('demo/',AjaxHandlerView.as_view()),
    path('save_book/',index,name="index"),
    path('',AddBook,name="add_book"),
    path('getAllBooks/',GetAllBooks,name="get_all_books")
]
