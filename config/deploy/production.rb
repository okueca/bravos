set :branch, 'main'
set :server_address, "#{ENV.fetch('SERVER_USER_ORGANIZATION')}"
server fetch(:server_address), user: "#{ENV.fetch('SERVER_USER_ORGANIZATION')}", roles: %w{app db web}
 
set :nginx_server_name, fetch(:server_address)