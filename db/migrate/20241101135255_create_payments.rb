class CreatePayments < ActiveRecord::Migration[7.1]
  def change
    create_table :payments do |t|
      t.string :method
      t.references :user, null: false, foreign_key: true
      t.references :activity, null: false, foreign_key: true
      t.float :amount , :default =>  0
      t.integer :status

      t.timestamps
    end
  end
end
