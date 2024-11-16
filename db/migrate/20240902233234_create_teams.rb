class CreateTeams < ActiveRecord::Migration[7.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.text :image
      t.integer :status

      t.timestamps
    end
  end
end
