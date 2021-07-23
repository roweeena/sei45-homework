Rails.application.routes.draw do
  root :to => 'deserts#index'
  get '/deserts' => 'deserts#index'
  get '/deserts/new' => 'deserts#new', :as => :new_desert
  post '/deserts' => 'deserts#create'
  get '/deserts/:id' => 'deserts#show', :as => :desert
  get '/deserts/:id/edit' => 'deserts#edit', :as => :edit_desert
  post '/deserts/:id' => 'deserts#update'
  delete '/deserts/:id' => 'deserts#destroy'
end
