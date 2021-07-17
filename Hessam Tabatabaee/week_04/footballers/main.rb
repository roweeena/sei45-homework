require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX: Show all Players
get '/footballers' do
  @footballers = query_db "SELECT * FROM footballers"
  erb :footballers_index
end

get '/footballers/new' do
  erb :footballers_new
end

# CREATE: Insert a new player into db
post '/footballers' do
  query_db "INSERT INTO footballers (name, family, national_goals, image) VALUES ('#{params[:name]}', '#{params[:family]}', #{params[:national_goals]}, '#{params[:image]}')"
  redirect to('/footballers')
end

# SHOW: Show a single Players
get '/footballers/:id' do
  @player = query_db "SELECT * FROM footballers WHERE id=#{ params[:id] }"
  @player = @player.first
  erb :footballers_show
end

# Edit
get '/footballers/:id/edit' do
  @player = query_db "SELECT * FROM footballers WHERE id=#{ params[:id] }"
  @player = @player.first
  erb :footballers_edit
end

# UPDATE
post '/footballers/:id' do
  query_db "UPDATE footballers SET name='#{params[:name]}', family='#{params[:family]}', national_goals='#{params[:national_goals]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/footballers/#{params[:id]}")
end

#DELETE
get '/footballers/:id/delete' do
  query_db "DELETE FROM footballers WHERE id=#{ params[:id] }"
  redirect to('/footballers')
end

def query_db (sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
