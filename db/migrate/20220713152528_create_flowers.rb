class CreateFlowers < ActiveRecord::Migration[6.1]
  def change
    create_table :flowers do |t|
      t.string :name
      t.string :image
      t.string :parents
      t.string :season
      t.boolean :is_in_your_garden
      t.integer :user_id

      t.timestamps
    end
  end
end
