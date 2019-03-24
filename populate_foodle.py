import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'angular_django.settings')

import django
django.setup()
from foodle.models import DealModel

def populate():
    deals = [
        {
            'picture': '/deals/foodle.png',
            "id": "0",
            "info": "Up to £5 off vegan items with a student card.",
            "likes": 12,
            "url": "https://www.fiveroffvegan.com",
            "category": "vegan"
        },
        {
            'picture': '/deals/foodle.png',
            "id": "1",
            "info": "A quarter off all purchases with a student card.",
            "likes": 38,
            "url": "https://www.quarteroffstudents.com",
            "category": "other"
        },
        {
            'picture': '/deals/foodle.png',
            "id": "2",
            "info": "Save money on Chinese takeaway.",
            "likes": 22,
            "url": "https://www.chinesemoneyoff.com",
            "category": "asian"
        },
        {
            'picture': '/deals/foodle.png',
            "id": "3",
            "info": "Bar Soba : 50% off for students.",
            "likes": 73,
            "url": "https://www.barsoba.com",
            "category": "asian"
        },
        {
            'picture': '/deals/foodle.png',
            "id": "4",
            "info": "Free cow with every extra saucy burger!",
            "likes": 322,
            "url": "https://www.saucyburger.com",
            "category": "indian"
        },
        {
            'picture': '/deals/foodle.png',
            "id": "5",
            "info": "Free soy milk (not oat) on purchases over £20.",
            "likes": 47,
            "url": "https://www.stopbuyingoats.com",
            "category": "vegan"
        }
    ]


    for deal in deals:
        add_deal(deal["picture"], deal["id"], deal["info"], deal["likes"], deal["url"], deal["category"])

    for d in DealModel.objects.all():
        print("- {0}".format(str(d)))

def add_deal(picture, id, info, likes, url, category):
    d = DealModel.objects.get_or_create(info=info)[0]
    
    d.picture = picture
    d.id = id
    d.info = info
    d.likes = likes
    d.url = url
    d.category = category

    d.save()

    return d

if __id__ == '__main__':
    print("Starting Foodle population script...")
    populate()