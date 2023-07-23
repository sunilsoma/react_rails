Rails.application.routes.draw do
  get 'test/home'
  devise_for :users
  
  root 'pages#index'
  get 'pages/index'
  resources :referrals, only: [:index, :create]

  namespace :api do
    devise_for :users, skip: [:registrations, :sessions]
    as :user do
      # API registration routes
      post 'users' => 'registrations#create'
      # API session routes
      post 'users/sign_in' => 'sessions#create'
      delete 'users/sign_out' => 'sessions#destroy'
    end
  end

  get '/member-data', to: 'members#show'
end
