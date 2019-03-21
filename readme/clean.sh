rm -f tmp.db db.sqlite3
rm -r foodle/migrations
python manage.py makemigrations
python manage.py migrate
# Creates tables for apps without migrations
python manage.py migrate --run-syncdb

cd foodle/front-end || exit
echo "npm :: verifying cache..."
npm cache verify
echo "npm :: removing node_modules - rebuild after exit."

rm -rf node_modules
cd ../..
rm -f package-lock.json

