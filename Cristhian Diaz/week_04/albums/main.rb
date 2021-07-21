# Create a brand new sinatra crud application using ActiveRecord -- this time with two tables (AKA models). For example, an author has many books, a director has many films, a musician has many songs, a football team has many football players.

require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
);

ActiveRecord::Base.logger = Logger.new(STDERR)

class Band < ActiveRecord::Base
  has_many :albums, dependent: :destroy
end

class Album < ActiveRecord::Base
  belongs_to :band
end

get '/' do
  erb :home
end
######## CRUD BANDS #########
# INDEX: Show ALL bands
get '/bands' do
  @bands = Band.all
  erb :bands_index
end

# NEW
get '/bands/new' do
  erb :bands_new
end

# CREATE
post '/bands' do
  band = Band.new
  band.name = params[:name]
  band.genre = params[:genre]
  band.save
  redirect to("/bands/#{ band.id }")
end

# SHOW
get '/bands/:id' do
  @band = Band.find params[:id]
  erb :bands_show
end

# EDIT
get '/bands/:id/edit' do
  @band = Band.find params[:id]
  erb :bands_edit
end

# UPDATE
post '/bands/:id' do
  band = Band.find params[:id]
  band.name = params[:name]
  band.genre = params[:genre]
  band.save
  redirect to("/bands/#{ band.id }")
end

# DESTROY

get '/bands/:id/delete' do
  band = Band.find params[:id]
  band.destroy
  redirect to("/bands")
end

######## CRUD BANDS #########

# INDEX
get '/albums' do
  @albums = Album.all
  erb :albums_index
end

# NEW
get '/albums/new' do
  erb :albums_new
end

# CREATE
post '/albums' do
  album = Album.new
  album.name = params[:name]
  album.cover = params[:cover]
  album.save
  redirect to("/albums/#{ album.id }")
end

# SHOW
get '/albums/:id' do
  @album = Album.find params[:id]
  erb :albums_show
end

# EDIT
get '/albums/:id/edit' do
  @album = Album.find params[:id]
  erb :albums_edit
end

# UPDATE
post '/albums/:id' do
  album = Album.find params[:id]
  album.name = params[:name]
  album.cover = params[:cover]
  album.save
  redirect to("/albums/#{ album.id }")
end

# DESTROY

get '/albums/:id/delete' do
  album = Album.find params[:id]
  album.destroy
  redirect to("/albums")
end



after do
  ActiveRecord::Base.connection.close
end
