## How to deploy your own todolist on heroku

### From your Terminal enter:

* $ git clone git://github.com/rbsthlm/todo_heroku.git
* $ cd todo_heroku 
* $ heroku create
* $ heroku config:add NODE_ENV=production
* $ heroku addons:add cloudant:oxygen
* $ curl -X PUT `heroku config:get CLOUDANT_URL`/arkansas
* $ curl -X PUT `heroku config:get CLOUDANT_URL`/arkansas/_design/Todo -d @todo.json
* $ git push heroku master
* $ heroku ps:scale web=1
* $ heroku open

### Rename heroku-app
When you're done with your heroku-app, you can rename it from the local app directory:

* $ heroku rename your-fancy-app-name

Heroku will add the pre- and suffix, so in this case the end result would be http://your-fancy-app-name.herokuapp.com

I hope you enjoy this as much as I do, it's really convenient to have your todolist available from anywhere :)


#### Built with:
#### Arkansas • [TodoMVC](http://todomvc.com)

Demo: [todomvc-arkansas.herokuapp.com](http://todomvc-arkansas.herokuapp.com/)
