class CreateTeamMembers < ActiveRecord::Migration[7.1]
  def change
    create_table :team_members do |t|
      t.references :team, null: false, foreign_key: true
      t.references :member, null: false, foreign_key: true
      t.integer :role

      t.timestamps
    end
  end
end
