rm -f tmp.db db.sqlite3
rm -r foodle/migrations
python manage.py makemigrations
python manage.py migrate
# Creates tables for apps without migrations
python manage.py migrate --run-syncdb