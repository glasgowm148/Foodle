import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'angular_django.settings')

import django
django.setup()
from foodle.models import Category, DealModel

def populate():
    vegan_deals = [
        {
            "info": "Up to £5 off vegan items with a student card.",
            "picture": ,
            "likes": 12
        },
        {
            "info": "A quarter off all purchases with a student card.",
            "picture": ,
            "likes": 5
        },
        {
            "info": "Free soy milk (not oat) on purchases over £20",
            "picture": ,
            "likes": 47
        }
    ]



    chinese_deals = [
        {
            "info": "One free drink with each meal if you have your student card.",
            "picture": ,
            "likes": 12
        },
        {
            "info": "temp deal",
            "picture": ,
            "likes": 5
        },
        {
            "info": "filler words",
            "picture": ,
            "likes": 47
        }
    ]



    indian_deals = [
        {
            "info": "indian temp deal",
            "picture": ,
            "likes": 12
        },
        {
            "info": "just filling up with test data",
            "picture": ,
            "likes": 5
        },
        {
            "info": "bunch of fake indian deals",
            "picture": ,
            "likes": 47
        }
    ]



    fastfood_deals = [
        {
            "info": "fake food made fast £10 off",
            "picture": ,
            "likes": 12
        },
        {
            "info": "still populating this db with test data",
            "picture": ,
            "likes": 5
        },
        {
            "info": "this is just tedius at this point",
            "picture": ,
            "likes": 47
        }
    ]



    other_deals = [
        {
            "info": "this is an other deal £2 I guess?",
            "picture": ,
            "likes": 12
        },
        {
            "info": "just polluting the pond",
            "picture": ,
            "likes": 5
        },
        {
            "info": "there we go last one",
            "picture": ,
            "likes": 47
        }
    ]



    category = {
        "vegan": {
            "deals": vegan_deals
        }
        "chinese": {
            "deals": chinese_deals
        }
        "indian": {
            "deals": indian_deals
        }
        "fast food": {
            "deals": fastfood_deals
        }
        "other": {
            "deals": other_deals
        }
    }



    for cat, cat_data in category.items():
        c = add_cat(cat)
        for p in cat_data["deals"]:
            add_deal(c, p["info"], p["picture"], p["likes"])

    for c in Category.objects.all():
        for d in DealModel.objects.filter(category=c):
            print("- {0} - {1}".format(str(c), str(p)))

def add_cat(name):
    c = Category.objects.get_or_create(name=name)[0]
    
    c.save()
    return c

def add_page(cat, info, picture, likes):
    d = DealModel.objects.get_or_create(category=cat, info=info)[0]
    
    d.picture=picture
    d.likes=likes
    d.save()
    return d

if __name__ == '__main__':
    print("Starting Foodle population script...")
    populate()