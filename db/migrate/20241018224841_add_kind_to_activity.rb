class AddKindToActivity < ActiveRecord::Migration[7.1]
  def change
    add_column :activities, :kind, :integer
  end
end
