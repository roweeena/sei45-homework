require 'sinatra'
require 'sinatra/reloader'

#ERB: embedded Ruby: html with chunks of ruby in it
get '/' do
  erb :home
end

get '/result' do
  #get the numbers
  x = params[:x].to_f
  y = params[:y].to_f

  #calc the result
  @result = case params[:operator]
  when '+' then x + y
  when '-' then x - y
  when '*' then x * y
  when '/' then x / y
  end

  puts "The result is #{ @result }"
  #render a view (erb file)
  erb :result
  end

  get '/faq' do
    erb :faq
  end 
