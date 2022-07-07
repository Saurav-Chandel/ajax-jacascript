from django.shortcuts import render
from django.http import HttpResponse
# from django.views.generics import View
from django.views import View
from time import time
from django.http import JsonResponse
from .models import *
from .serializer import *

# Create your views here.



class AjaxHandlerView(View):
    def get(self,request):
        text=request.GET.get('button_text')
        # print(text)
        if request.is_ajax():
            t=time()
            return JsonResponse({'seconds':t},status=200)

        return render(request,'index.html')

    def post(self,request):
        card_text=request.POST.get('text')
        print(card_text)
        result=f"I have got {card_text}"  
        return JsonResponse({'data':result},status=200)  


def index(request):
    return render(request,'data.html')  


def AddBook(request):
    if request.method=="GET":
        print(")))))))))))))))))0")
        return render(request,'data.html')
    if request.method=="POST":
        print('______________--')
        name=request.POST['name']
        print(name)
        prize=request.POST['prize']
        pages=request.POST['pages']

    
        b=book(name=name,prize=prize,pages=pages)
        b.save()
        return HttpResponse("jhfbewhyjfbwybfyebyuy")
        
        # try:
        #     b.save();
        #     return HttpResponse('true')
        # except:
        #     return HttpResponse('false')

def GetAllBooks(request):
    print('get all books')
    l=[]
    b=book.objects.all()
    for bk in b:
        ser=BookSerializer(bk)
        l.append(ser.data);
        # print(ser.data)
    # print(l)    
    import json
    return HttpResponse(json.dumps(l))
    # return render(request,'data.html',{'book':b})





   
    
