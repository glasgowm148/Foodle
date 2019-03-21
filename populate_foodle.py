import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'angular_django.settings')

import django
django.setup()
from f.models import Deal

def populate():
    deals = [
        {
            "name": "Fake Deal",
            "info":"Description for fake deal.",
            "category": 34,
            "likes": 5,
        },
        {
            "name": "Bar Soba - half off students!",
            "info":"At Bar Soba you can get half the price of your order deducted by linking your student email and showing the staff.",
            "views": 78,
            "likes": 31,
        },
        {
            "name": "Yet another fake deal",
            "info":"This fake deal is still fake.",
            "views": 44,
            "likes": 15,
        }]

    for cat, cat_data in cats.items():
        add_deal(cat,cat_data)
        for p in cat_data["pages"]:
            add_page(c, p["title"], p["url"], p["views"])

def add_deal(cat, title, url, views=0):
    p = Page.objects.get_or_create(category=cat, title=title)[0]
    
    p.url=url
    p.views=views
    p.save()
    return p

if __name__ == '__main__':
    print("Starting Foodle population script...")
    populate()