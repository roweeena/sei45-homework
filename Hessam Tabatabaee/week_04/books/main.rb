require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title].capitalize
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get @book_url
  @cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @title = @info["items"][0]["volumeInfo"]["title"]
  @authors = @info["items"][0]["volumeInfo"]["authors"]
  @description = @info["items"][0]["volumeInfo"]["description"]

  erb :result
end
