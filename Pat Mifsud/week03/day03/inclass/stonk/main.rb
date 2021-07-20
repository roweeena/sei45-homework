require 'sinatra' 
require 'sinatra/reloader'
require 'stock_quote'

StockQuote::Stock.new(:api_key => 'pk_16a849fd637243a79fff90fa4d42bc5d')

# -----------------------------------------


get '/' do
    erb :home

end

get '/stock' do
    @stock_symbol = params[:symbol].upcase
    @data = StockQuote::Stock.quote @stock_symbol

    #--------
    @name = @data.company_name
    @price = @data.latest_price
    @high = @data.high
    @low = @data.low

    #--------
    erb :stock

end