. venv/bin/activate
cd foodle/front-end || exit
ng build --prod 
cd ../..
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
