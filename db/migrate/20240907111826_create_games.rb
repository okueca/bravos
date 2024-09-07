class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.references :first_team, foreign_key: { to_table: :teams }
      t.references :second_team, foreign_key: { to_table: :teams }
      t.string :result
      t.integer :status

      t.timestamps
    end
    
  end
end
