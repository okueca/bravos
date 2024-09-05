class AddRoleToMember < ActiveRecord::Migration[7.1]
  def change
    add_column :members, :role, :integer
  end
end
