# Change these
server '185.143.45.143', port: 7822, roles: [:web, :app, :db], primary: true # port_num is optional can be removed 

set :application, "bravos"
set :repo_url, "git@github.com:okueca/bravos.git"
set :branch, "main"

# Don't change these unless you know what you're doing
set :pty,             true
set :use_sudo,        false
set :stage,           :production
set :deploy_via,      :remote_cache
set :deploy_to,       "/home/mudex/apps/#{fetch(:application)}"

set :ssh_options,     { forward_agent: true, user: "mudex", keys: %w(~/.ssh/id_rsa.pub) }

set :tmp_dir, "/home/mudex/tmp"
set :default_env, { path: "~/.rbenv/shims:~/.rbenv/bin:$PATH" }
# setup rbenv.
set :rbenv_type, :system
set :rbenv_ruby, '3.0.6'
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
set :rbenv_map_bins, %w{rake gem bundle ruby rails}
set :rbenv_path, '/home/mudex/.rbenv'