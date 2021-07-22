Rails.application.routes.draw do
#home
root :to => 'oceans#home'
#show all (read)
get '/oceans' => 'oceans#index'
#create
get '/oceans/new' => 'oceans#new', :as => :new_ocean
post '/oceans' => 'oceans#create'
# show one (read)
get '/oceans/:id' => 'oceans#show', :as => :ocean
#edit
get '/oceans/:id/edit' => 'oceans#edit', :as => :edit_ocean
#update
post '/oceans/:id' => 'oceans#update'
#destroy
delete '/oceans/:id' => 'oceans#destroy'

end
