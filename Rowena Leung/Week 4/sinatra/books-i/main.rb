require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


#ERB: embedded Ruby: html with chunks of ruby in it
get '/' do
  erb :home
end

get '/result' do
  #get the numbers

  @book = params[:x]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"
  @info = HTTParty.get book_url
  @book_title = @info["items"][0]["volumeInfo"]["title"]
  @rating = @info["items"][0]["volumeInfo"]["averageRating"]
  @author = @info["items"][0]["volumeInfo"]["authors"].join(", ")
  @summary = @info["items"][0]["volumeInfo"]["description"]
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @buy_link = @info["items"][0]["saleInfo"]["buyLink"]



  erb :result
  end
