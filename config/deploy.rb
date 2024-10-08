set :application, "bravos"
set :repo_url, "git@github.com:okueca/bravos.git"
set :branch, "main"
set :deploy_to, "/home/#{ENV.fetch('SERVER_USER_ORGANIZATION')}/apps/#{fetch(:application)}"
set :user, "#{ENV.fetch('SERVER_USER_ORGANIZATION')}"

set :ssh_options, { forward_agent: true, user: fetch(:user), keys: %w(~/.ssh/id_rsa.pub) }

set :tmp_dir, "/home/#{ENV.fetch('SERVER_USER_ORGANIZATION')}/tmp"
set :default_env, { path: "~/.rbenv/shims:~/.rbenv/bin:$PATH" }
# setup rbenv.
set :rbenv_type, :system
set :rbenv_ruby, '3.0.6'
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_path, "/home/#{ENV.fetch('SERVER_USER_ORGANIZATION')}/.rbenv"

set :passenger_restart_with_touch, false