set :branch, 'main'
set :server_address, '185.143.45.143:7822'
server fetch(:server_address), user: "mudex", roles: %w{app db web}
 
set :nginx_server_name, fetch(:server_address)
set :puma_preload_app, true