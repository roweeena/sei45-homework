require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#SHOW all
get '/index' do
  @kpop = db_query 'SELECT * FROM kpop'
  erb :index
end

#SHOW one

get '/index/:id' do
  @kpop = db_query "SELECT * FROM kpop WHERE id=#{params[:id]}"
  @kpop = @kpop.first
  erb :group_show
end

#CREATE NEW
get '/new' do
  erb :new_group
end

post '/index' do
  db_query "INSERT INTO kpop (name, members, best_song, active, image ) VALUES ('#{params[:name]}','#{params[:members]}','#{params[:best_song]}', '#{params[:active]}', '#{params[:image]}')"
  redirect to ('/index')
end

#Edit
get '/index/:id/edit' do
  @kpop = db_query "SELECT * FROM kpop WHERE id=#{params[:id]}"
  @kpop = @kpop.first
  erb :edit
end


#UPDATE
post '/index/:id' do
  db_query "UPDATE kpop SET name='#{params[:name]}', members='#{params[:members]}', best_song='#{params[:best_song]}', active='#{params[:active]}',  image='#{params[:image]}' WHERE id=#{params[:id]}"

  redirect to ("/index/#{params[:id]}")
end


#DELETE
get '/index/:id/delete' do
  db_query "DELETE FROM kpop WHERE id=#{params[:id]}"
  redirect to('/index')
end

#but first function

def db_query (sql_statement)
  puts sql_statement #for the debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
