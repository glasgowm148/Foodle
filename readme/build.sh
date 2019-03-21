. venv/bin/activate
cd foodle/front-end || exit
ng build
cd ../..
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
