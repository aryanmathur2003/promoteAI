from django.http import HttpResponse
from .serializers import ImageSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import imageLinks
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework import generics,status

class createImage(APIView):
    serializer_class = ImageSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # Access the serialized data
            serializer.save()
            # image1 = serializer.data.get("image1")
            
            return Response({"message": "Data successfully processed"})
        else:
            return Response(serializer.errors, status=400)
  
class getImage(APIView):
    def get(self, request):
        list = imageLinks.objects.all()[0]
        ans = {
                'image1': list.image1,
                'image2': list.image2,
                'image3': list.image3,
                'image4': list.image4,
                'tweet1': list.tweet1,
                'tweet2': list.tweet2,
                'tweet3': list.tweet3,
                'tweet4': list.tweet4,
            }
        list.delete()
        return JsonResponse(ans, content_type='application/json', status=status.HTTP_200_OK)