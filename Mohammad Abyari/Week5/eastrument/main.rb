require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

#AR Setup
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# like console.log
ActiveRecord::Base.logger = Logger.new(STDERR)

#Create class instruments
class Instrument < ActiveRecord::Base
  has_many :artists
end

class Artist < ActiveRecord::Base
  belongs_to :instrument, :optional => true
end

#################### Home
get '/' do
  erb :home
end

#################### Show all artist
#index to Show all instruments
get '/instruments' do
  @instruments = Instrument.all
  erb :instruments_index
end

get '/artists' do
  @artist = Artist.all
  erb :artists_index
end

#################### New page
get '/instruments/new' do
  erb :instruments_new
end

get '/artists/new' do
  erb :artists_new
end


#################### New Post
post '/instruments' do
 instrument = Instrument.new
 instrument.name = params[:name]
 instrument.cat = params[:cat]
 instrument.geo = params[:geo]
 instrument.image = params[:image]
 instrument.save
 redirect to("/instruments/#{instrument.id}") #get request

end

post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.instrument = params[:instrument]
  artist.country = params[:country]
  artist.image = params[:image]
  artist.save
  redirect to("/artists/#{artist.id}")
end

# ####################  Show
get '/instruments/:id' do
  @instrument = Instrument.find params[:id]
  #render a view to display instruments (erb)
  erb :instruments_show
end

get'/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

#################### Edit
get '/instruments/:id/edit' do
  @instrument = Instrument.find params[:id]
  erb :instruments_edit

end

get '/artists/:id/edit' do
  @artist= Artist.find params[:id]
  erb :artists_edit
end

#################### Edit Post
post '/instruments/:id' do
  instrument = Instrument.find params[:id]
  instrument.name = params[:name]
  instrument.cat = params[:cat]
  instrument.geo = params[:geo]
  instrument.image = params[:image]
  instrument.save
  redirect to("/instruments/#{instrument.id}")
end

post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.instrument = params[:instrument]
  artist.country = params[:country]
  artist.image = params[:image]
  artist.save
  redirect to("/artists/#{artist.id}")
end



#################### Delete
get '/instruments/:id/delete' do
  instrument = Instrument.find params[:id]
    instrument.destroy
  redirect to("/instruments")
end

get "/artists/:id/delete" do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to("/artists")
end

#################### Reset Base connection
after do
  ActiveRecord::Base.connection.close
end
