from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotAllowed

# Vista para API simple que responde con JSON
def home(request):
    if request.method == "GET":
        return JsonResponse({"message": "Bienvenido desde Django Backend"})
    else:
        # Responder solo a GET, para otros métodos devolver error 405
        return HttpResponseNotAllowed(['GET'])

# Ejemplo para servir una página HTML desde Django (opcional)
def home_page(request):
    return render(request, "home.html", context={"message": "Bienvenido a la página principal"})
