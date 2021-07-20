require 'sinatra'
require 'sinatra/reloader'

get '/hello' do
    "<a href='/home'>Go to home</a> <a href='/fanclud'>Go to home</a>Hello. 
        </br> Have a lucky number: #{rand 1..40}
        </br> Here is the server uptime: #{`uptime`}"
    
end

get '/' do
    "<a href='/hello'>Go to hello</a> Home "
end

get '/goodbye' do
    "Goodbye cruel world"
end



get '/calculator/:num1/:num2' do
    result = params[:num1].to_f + params[:num2].to_f
    "<h1>#{result}</h1>"
end


get '/fanclub/:name' do
    "#{params[:name].capitalize}is a proud member of the fanclub fanclub"
end

get '/fanclub/:first/:last' do
    "#{params[:first].capitalize} #{params[:last].capitalize} is a premium member"
end

get '/fanclub/:first/:last/:favorite' do
    "#{params[:first].capitalize} #{params[:last].capitalize} is a platinum member, and their favorite brother is #{params[:favorite].capitalize}"
end
