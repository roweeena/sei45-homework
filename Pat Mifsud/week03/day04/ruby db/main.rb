require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/butterflies' do
    #connect to db

    @butterflies = query_db ('SELECT * FROM butterflies')
    erb :butterflies_index
end


get '/butterflies/new' do
    erb :butterflies_new
end
  
post '/butterflies' do
    query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', 
    '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/butterflies') 
 end

get '/butterflies/:id' do
    @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = @butterfly.first # Extract the single hash from the array.
    erb :butterflies_show
end
  

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    return results 
end