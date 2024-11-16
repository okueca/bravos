Rails.application.routes.draw do
  resources :activities
  resources :games
  root 'teams#index'
  resources :team_members
  resources :members
  resources :teams
  devise_for :users
  get 'activities/:id/participate_activity' => 'activities#participate_activity',   as: 'participate_activity'
  get 'activities/:id/success_payment' => 'activities#success_payment',   as: 'success_payment'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
