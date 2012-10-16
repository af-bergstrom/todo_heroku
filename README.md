# Here is how you get it working right away, straight deploy to heroku!

## How to deploy your own todolist

git clone git://
cd todomvc.arkansas 
heroku create
heroku config:add NODE_ENV=production
heroku addons:add cloudant:oxygen
curl -X PUT `heroku config:get CLOUDANT_URL`/arkansas
curl -X PUT `heroku config:get CLOUDANT_URL`/arkansas/_design/Todo -d @todo.json
git push heroku master
heroku ps:scale web=1
heroku open

# Built with:
# Arkansas • [TodoMVC](http://todomvc.com)

Demo: [todomvc-arkansas.herokuapp.com](http://todomvc-arkansas.herokuapp.com/)