require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Movie < ActiveRecord::Base
  belongs_to :director

end

class Director < ActiveRecord::Base
  has_many :movies
end

get '/' do
  erb :home
end

#######Directors######
#INDEX

get '/directors' do
  @directors = Director.all
  erb :directors_index
end
#CREATE
#-- new form --#

get '/directors/new' do
  erb :directors_new
end
#--------------#
post '/directors' do
  director = Director.new
  director.first_name = params[:first_name]
  director.last_name = params[:last_name]
  director.country = params[:country]
  director.number_of_awards = params[:number_of_awards]
  director.image = params[:image]
  director.save
  redirect to ("/directors/#{director.id}")
end

#READ
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

#UPDATE
#--edit form--#

get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

post '/directors/:id' do
  director = Director.find params[:id]
  director.first_name = params[:first_name]
  director.last_name = params[:last_name]
  director.country = params[:country]
  director.number_of_awards = params[:number_of_awards]
  director.image = params[:image]
  director.save
  redirect to ("directors/#{params[:id]}")
end
#DELETE

get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to ('/directors')
end

########## Movies ############
#INDEX

get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

#CREATE
#-- new form --#

get '/movies/new' do
  erb :movies_new
end

#--------------#
post '/movies' do
  movie = Movie.new
  movie.director_id = params[:director_id]
  movie.name = params[:name]
  movie.year_release = params[:year_release]
  movie.summary = params[:summary]
  movie.image = params[:image]
  movie.save
  redirect to ("/movies/#{movie.id}")
end

#READ
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end
#UPDATE
#--edit form--#

get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.director_id = params[:director_id]
  movie.name = params[:name]
  movie.year_release = params[:year_release]
  movie.summary = params[:summary]
  movie.image = params[:image]
  movie.save
  redirect to ("movies/#{params[:id]}")
end

#DELETE
get '/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to ('/movies')
end
