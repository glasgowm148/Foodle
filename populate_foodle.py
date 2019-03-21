import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'tango_with_django_project.settings')

import django
django.setup()
from rango.models import Category, DealModel

def populate():
    python_pages = [
        {"title": "Official Python Tutorial",
         "url": "http://docs.python.org/2/tutorial/",
         "views": 25},
        {"title":"How to Think like a Computer Scientist",
         "url":"http://www.greenteapress.com/thinkpython/",
         "views": 30},
        {"title":"Learn Python in 10 Minutes",
         "url":"http://www.korokithakis.net/tutorials/python/",
         "views": 35}]

    django_pages = [
        {"title":"Official Django Tutorial",
         "url":"https://docs.djangoproject.com/en/1.9/intro/tutorial01/",
         "views": 45},
        {"title":"Django Rocks",
         "url":"http://www.djangorocks.com/",
         "views": 50},
        {"title":"How to Tango with Django",
         "url":"http://www.tangowithdjango.com/",
         "views": 55}]

    other_pages = [
        {

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
        "other": {
            "deals": other_deals
        }
    }

    for category, category_data in category.items():
        c = add_category(cat,cat_data)
        for p in cat_data["deals"]:
            add_deal(c, p["title"], p["url"], p["views"])

    for c in Category.objects.all():
        for p in Page.objects.filter(category=c):
            print("- {0} - {1}".format(str(c), str(p)))

def add_cat(name, cat_data):
    c = Category.objects.get_or_create(name=name)[0]

    c.likes=cat_data["likes"]
    c.save()
    return c

def add_page(cat, title, url, views=0):
    dm = DealModel.objects.get_or_create(category=cat, title=title)[0]
    
    dm.url=url
    dm.views=views
    dm.save()
    return dm

if __name__ == '__main__':
    print("Starting Rango population script...")
    populate()