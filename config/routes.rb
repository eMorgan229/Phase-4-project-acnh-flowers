Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # LOGIN routes
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

# FLOWER routes
get "/flowers", to: "flowers#index"
patch "/flowers/:id", to: "flowers#update"
# delete "/flowers/:id", to: "flowers#delete_flower"


#USER routes
get "/user/:id/flowers", to: "users#flowers"

#GARDEN
post "/garden", to: "my_gardens#create"
post "/delete-garden", to: "my_gardens#delete_garden"



#COMMENTS routes
get "/comments", to: "comments#index"
# get "/comments/:id", to: "comments#show"

#My_Garden routes
# get "/garden/:id". to: "my_garden#show"
end


