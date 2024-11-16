class AddFielsToActivity < ActiveRecord::Migration[7.1]
  def change
    add_column :activities, :price_by, :integer
    add_column :activities, :start_hour, :string
    add_column :activities, :end_hour, :string
    add_column :activities, :location, :string
  end
end
