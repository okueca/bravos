class AddRoleToUser < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :role, :integer
    User.create(name:"Stervio Carvalho", email:"admin@bravos.com", password: "bravosadmin123456", role: :admin)
  end
end
