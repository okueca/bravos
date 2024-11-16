class CreateActivities < ActiveRecord::Migration[7.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.date :date_start
      t.date :date_end
      t.string :date_text
      t.float :price, :default =>  0
      t.timestamps
    end
  end
end
