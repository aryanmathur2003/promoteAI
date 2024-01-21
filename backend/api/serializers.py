from rest_framework import serializers
from .models import imageLinks

class ImageSerializer(serializers.ModelSerializer):
    # profileImg = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = imageLinks
        fields = ('image1','image2', 'image3', 'image4', 'tweet1', 'tweet2', 'tweet3', 'tweet4')
