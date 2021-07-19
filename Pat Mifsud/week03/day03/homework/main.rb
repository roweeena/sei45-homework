require 'sinatra' 
require 'sinatra/reloader'
require 'httparty'

$recent_search = ["harry potter"]
@breadcrumbs = " "

# -----------------------------------------


get '/' do
    erb :home
end

get '/result' do

    @query = params[:query].downcase

    #add query to recent seares if unique
    $recent_search |= [@query]

    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@query}"
    @book_data = HTTParty.get(book_url)['items'][0]


    #--------
    @name = @book_data["volumeInfo"]["title"]
    @desc = @book_data["searchInfo"]['textSnippet']

    
    @image = @book_data["volumeInfo"]["imageLinks"]["thumbnail"]
    # @price = @book_data["saleInfo"]["retailPrice"]["amount"]
    # @buyLink = @book_data["saleInfo"]["buyLink"]

    #--------

    erb :result

end

# 