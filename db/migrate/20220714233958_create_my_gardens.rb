class CreateMyGardens < ActiveRecord::Migration[6.1]
  def change
    create_table :my_gardens do |t|
      t.integer :user_id
      t.integer :flower_id

      t.timestamps
    end
  end
end
